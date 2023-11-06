from RHI import *
import gspread.utils as utils
import time

from gspread_functions import gspread_get_RHI_logins

#log onto each ORG and creat additional user

rhi_col = utils.a1_to_rowcol('D1')[1]; userpass_col = 3
last_login_col = utils.a1_to_rowcol('W1')[1]
dates_col = utils.a1_to_rowcol('J1')[1]; 
fdates_col = utils.a1_to_rowcol('X1')[1]

worksheet, client = gspread_connect_to_sheet('RHI Complex (Working edit)','RHI Meters Complex')

#get data from google sheet
rhis, usernames, passwords, last_login_succesful, _, _ = gspread_get_RHI_logins(rhi_col,
     userpass_col, last_login_col, dates_col, fdates_col, worksheet)


rhi_users = []
for [username,indices] in condense_list_with_indices(usernames):
    rhi_users.append([username, passwords[indices[0]], [rhis[i] for i in indices], indices])

#rhi_users = [rhi_users[1]] #uncomment this line to only run the code for one ORG

#choose web driver

head_options = Options()
#head_options.add_argument('-headless')  #uncomment this line to run in background

#create Additional User object
Adam = AU("Mr", "Adam", "Johnston", "P", "technical@yourenergysource.co.uk", "07761326499", "AJ", "Burns")

with webdriver.Firefox(options=head_options) as driver:
    driver.implicitly_wait(1)

    for user in rhi_users:
        indices = user[3] #these are the indices of the rhi numbers in the master list "rhis"

        try:
            if(all([getbool(last_login_succesful[index]) for index in indices])):
            
                login(user[0], user[1], driver)

                #add AU
                try:
                    Adam.add_AU(user[0], user[1], driver)
                except NoSuchElementException as exc:
                    logging.warning(username + "already has this username registered. Check AU list.")
                    continue

                logout(driver)

            else:
                logging.warning(f"{user[0]} skipped: password incorrect")

        except LoginFailed as exc:
                logging.warning(exc)
                #Make sure username is not retried
                indices = [index for index, element in enumerate(usernames) if element == exc.username]
                for index in indices:
                    last_login_succesful[index] = False

                #push update to sheet
                worksheet.update(utils.rowcol_to_a1(2,last_login_col) + ':' + 
                        utils.rowcol_to_a1(worksheet.row_count,last_login_col), 
                        [[i] for i in last_login_succesful])
                



