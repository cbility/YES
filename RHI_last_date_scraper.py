from oauth2client.service_account import ServiceAccountCredentials
import gspread
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, StaleElementReferenceException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options
import gspread.utils as utils
import time
import logging

#configure logging system

loglevel = logging.INFO
logging.basicConfig(level=loglevel, format='%(asctime)s - %(levelname)s - %(message)s')


def connect_to_sheet(doc_name, sheet_name):
    #set permissions
    scope = ['https://spreadsheets.google.com/feeds',
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/drive']

    # Reading Credentials from ServiceAccount Keys file
    credentials = ServiceAccountCredentials.from_json_keyfile_name(r"C:\Users\Energysource2014\Documents\yes-sheets-85a4f1a3bf09.json"
                , scope)

    # intitialize the authorization object            
    client = gspread.authorize(credentials)

    # Open the Google Sheets document by its title
    sheet = client.open(doc_name)

    # Access a specific worksheet by its title or index
    worksheet = sheet.worksheet(sheet_name)

    return worksheet, client

def get_logins(rhi_column, username_column, last_login_column, dates_column, worksheet):

    #get rhi and org numbers
    rhis_orgs = worksheet.col_values(rhi_column)[1:]
    #select rhi numbers
    logging.debug(rhis_orgs)
    logging.debug([i.split('\n') for i in rhis_orgs])

    rhis = [[rhi[:13] for rhi in i.split('\n') if rhi[:3] == "RHI"][0] for i in rhis_orgs]

    #get usernames and passwords
    username_passwords = worksheet.col_values(username_column)[1:]

    #remove extra spaces and whitespace
    username_passwords_cleaned= []
    for user_pass_pair in username_passwords:
        x=[]
        for i in user_pass_pair.split('\n'):
            if i.strip() != "": #if i is not whitespace
                x.append(i.strip())
        username_passwords_cleaned.append(x)

    usernames = [i[0] for i in username_passwords_cleaned]
    passwords = [i[1] for i in username_passwords_cleaned]

    #get password safety net
    last_login_succesful = worksheet.col_values(last_login_column)[1:]

    #get old dates
    old_dates = worksheet.col_values(dates_column)[1:]

    return rhis, usernames, passwords, last_login_succesful, old_dates

def condense_list_with_indices(lst):
    condensed_lst = []
    index_dict = {}

    for i, item in enumerate(lst):
        if item in index_dict:
            index_dict[item].append(i)
        else:
            index_dict[item] = [i]

    for item, indices in index_dict.items():
        condensed_lst.append((item, indices))

    return condensed_lst


def RHI_login(username, password, driver):

    #Navigate to RHI portal
    driver.get("https://rhi.ofgem.gov.uk/")

    driver.find_element(By.ID,"SecondaryPlaceHolder_RightColumnContentPlaceHolder_valSumLogin")

    #enter username and password
    username_field = driver.find_element(By.ID, "SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtUserName")
    username_field.send_keys(username)

    password_field = driver.find_element(By.ID, "SecondaryPlaceHolder_RightColumnContentPlaceHolder_txtPassword")
    password_field.send_keys(password)

    #submit form and log in
    submit_button = driver.find_element(By.ID, "SecondaryPlaceHolder_RightColumnContentPlaceHolder_btnContinue")
    submit_button.click()

    #check login was successful
    try:
        error_message = driver.find_element(By.ID,"SecondaryPlaceHolder_RightColumnContentPlaceHolder_valSumLogin")
        if error_message.text == "Username or password is invalid":
            raise LoginFailed(username)
    except NoSuchElementException:
        # Login was successful
        logging.info(username + ": Login successful")

def get_last_submission_date(rhi_numbers, driver):

    #navigate to periodic data page
    driver.get("https://rhi.ofgem.gov.uk/PeriodicData/SubmitPeriodicData.aspx")

    #initialise list of dates
    dates=[]

    for rhi_number in rhi_numbers:

        #re-find installation selector element
        installation_selector = driver.find_element(By.ID, "FullWidthPlaceholder_FullWidthContentPlaceholder_ddlInstallation")

        #view RHI numbers
        select = Select(installation_selector)
        options = select.options

        #get date for relevant RHI number
        for option in options:
            rhi = option.text[:13]
            if (rhi == rhi_number):
                logging.info(rhi + " selected")
                #select RHI number
                value = option.get_attribute("value")
                select.select_by_value(value)

                #get all dates
                #date_table = driver.find_element(By.ID, "FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines")
                #date_rows = date_table.find_elements(By.TAG_NAME, 'tr')

                #get last date
                try:
                    submission_no = 0
                    action_button = driver.find_element(By.ID, f"FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines_lnkAction_{submission_no}")
                    #get last submission
                    while action_button.text != "View":
                        submission_no += 1
                        action_button = driver.find_element(By.ID, f"FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines_lnkAction_{submission_no}")

                    #get date
                    latest_date = driver.find_element(By.ID, f"FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines_lblPeriodDates_{submission_no}")
                except NoSuchElementException as exc:
                    logging.warning(exc)
                    dates.append([rhi,'Never Submitted'])
                else:
                    dates.append([rhi, latest_date.text[-11:].strip()])
                finally:
                    logging.info(f"{dates[-1][0]} last submitted on {dates[-1][1]}")
                    break
    return dates

def RHI_logout(driver):
    logout_button = driver.find_element(By.ID, "WelcomeAndLogoutPlaceHolder_Button1")
    logout_button.click()
    time.sleep(1)
    confirm_logout_button = driver.find_element(By.ID, "mainPlaceHolder_btnLogout")
    confirm_logout_button.click()

class LoginFailed(Exception):
    def __init__(self, username):
        self.username = username
        super().__init__(f"INCORRECT PASSWORD FOR {username}")

def getbool(input):
    boolean = {'TRUE': True, 'FALSE': False}
    return boolean.get(input.upper())

rhi_col = utils.a1_to_rowcol('E1')[1]; userpass_col = 3
last_login_col = utils.a1_to_rowcol('W1')[1]
dates_col = utils.a1_to_rowcol('J1')[1]; 


if __name__ == "__main__":

    worksheet, client = connect_to_sheet('RHI Complex (Working edit)','RHI Meters Complex')

    #get data from google sheet
    rhis, usernames, passwords, last_login_succesful, old_dates = get_logins(rhi_col,
     userpass_col, last_login_col, dates_col, worksheet)

    new_dates = old_dates

    #create list of usernames, passwords and associated RHI numbers
    rhi_users = []
    for [username,indices] in condense_list_with_indices(usernames):
        rhi_users.append([username, passwords[indices[0]], [rhis[i] for i in indices], indices])

    #rhi_users = [rhi_users[1]]

    #choose web driver
   
    head_options = Options()
    head_options.add_argument('-headless')  #uncomment this line to run in background
    with webdriver.Firefox(options=head_options) as driver:
        driver.implicitly_wait(1)

        for user in rhi_users:
            indices = user[3] #these are the indices of the rhi numbers in the master list "rhis"

            try:
                if(all([getbool(last_login_succesful[index]) for index in indices])):

                    RHI_login(user[0], user[1], driver)

                    dates = get_last_submission_date(user[2], driver)

                    RHI_logout(driver)

                    for rhi in dates: 
                        for index in indices:
                            if rhis[index] == rhi[0]: #identify index of this RHI number
                                #update date
                                new_dates[index] = rhi[1]
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
                

    #export dates to sheet
    worksheet, client = connect_to_sheet('RHI Complex (Working edit)','RHI Meters Complex')
    
    worksheet.update(utils.rowcol_to_a1(2,dates_col) + ':' + 
                     utils.rowcol_to_a1(worksheet.row_count,dates_col), 
                     [[i] for i in new_dates])
    
    worksheet.format(utils.rowcol_to_a1(2,dates_col) + ':' + 
                     utils.rowcol_to_a1(worksheet.row_count,dates_col), { "numberFormat": { "type": "DATE","pattern": "d\" \"mmm\" \"yyyy"}})
    