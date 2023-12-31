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
import re
import requests 

#configure logging system

loglevel = logging.INFO
logging.basicConfig(level=loglevel, format='%(asctime)s - %(levelname)s - %(message)s')

def smartsuite_get_rhis():
    import requests

    url = "https://app.smartsuite.com/api/v1/applications/{replace_with_solution_id}/records/list/"
    headers = {
        "Authorization": "Token {your_api_token}",
        "ACCOUNT-ID": "{your_account_id}",
        "Content-Type": "application/json",
    }

    response = requests.get(url, headers=headers)
    data = response.json()

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

def get_logins(rhi_column, username_column, last_login_column, dates_column, fdates_col, worksheet):

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

    #get first dates
    first_dates = worksheet.col_values(fdates_col)[1:]

    return rhis, usernames, passwords, last_login_succesful, old_dates, first_dates

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
        error_message = driver.find_element(By.ID, "WelcomeAndLogoutPlaceHolder_lblWelcomeUser")
        if error_message.text[:7] == "Welcome":
            # Login was successful
            logging.info(username + ": Login successful")
        else:
            raise LoginFailed(username)
        
    except NoSuchElementException:
        raise LoginFailed(username)
    



def get_first_submission_date(rhi_numbers, driver):
    #navigate to periodic data page
    driver.get("https://rhi.ofgem.gov.uk/PeriodicData/SubmitPeriodicData.aspx")

    #initialise list of first dates
    fdates = []

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
                logging.debug(rhi + " selected")
                #select RHI number
                value = option.get_attribute("value")
                select.select_by_value(value)

                #get all dates
                date_table = driver.find_element(By.ID, "FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines")
                date_rows = date_table.find_elements(By.TAG_NAME, 'tr')

                #get first date
                fdate = date_rows[-1]
                fdates.append([rhi, fdate.text[29:28+13].strip()])

                logging.info(f"{fdates[-1][0]} first submission due {fdates[-1][1]}")
                break

    return fdates


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
                logging.debug(rhi + " selected")
                #select RHI number
                value = option.get_attribute("value")
                select.select_by_value(value)


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
                    dates.append([rhi,'Never'])
                else:
                    dates.append([rhi, latest_date.text[-11:].strip()])
                finally:
                    logging.info(f"{dates[-1][0]} last submitted {dates[-1][1]}")
                    break
    return dates


def RHI_logout(driver):
    max_retries = 3
    skip = False
    for retry in range(max_retries):
        try:
            logout_button = driver.find_element(By.ID, "WelcomeAndLogoutPlaceHolder_Button1")
            logout_button.click()
            break
        except (StaleElementReferenceException, NoSuchElementException) as exc:
            logging.warning(exc)
            logging.warning(f"Attempt {retry + 1} of {max_retries} failed")
            if retry + 1 == max_retries: 
                logging.error("Logout button click failed. Continuing...")
                skip = True
    if not(skip):
        for retry in range(max_retries):
            try:
                confirm_logout_button = driver.find_element(By.ID, "mainPlaceHolder_btnLogout")
                confirm_logout_button.click()
                break
            except (StaleElementReferenceException, NoSuchElementException) as exc:
                logging.warning(exc)
                logging.warning(f"Attempt {retry + 1} of {max_retries} failed")
                if retry + 1 == max_retries: 
                    logging.error("Logout confirm button click failed. Continuing...")


class Input:
    def __init__(self, var):
        self.var = var

    def enter(self, id, driver):
        field = driver.find_element(By.ID, id)
        field.send_keys(self.var)

class AU:
    def __init__(self, title, fname, lname, middle_inital, email, phone, initials, mothers_maiden):
        self.title = Input(title)
        self.fname = Input(fname)
        self.lname = Input(lname)
        self.middle_inital = Input(middle_inital)
        self.email = Input(email)
        self.phone = Input(phone)
        self.initials = Input(initials)
        self.mothers_maiden = Input(mothers_maiden)

    def add_AU(self, username, password, driver):
        #navigate to manage users page
        driver.get("https://rhi.ofgem.gov.uk/UserManagement/ListUsers.aspx")

        #click to add additional user
        add_new_button = driver.find_element(By.ID, "FullWidthPlaceholder_FullWidthContentPlaceholder_btnAddNew")
        add_new_button.click()

        #fill out form
        self.title.enter("mainPlaceHolder_ContentPlaceHolder_txtTitle",driver)
        self.fname.enter("mainPlaceHolder_ContentPlaceHolder_txtFirstName",driver)
        self.lname.enter("mainPlaceHolder_ContentPlaceHolder_txtLastName",driver)
        self.middle_inital.enter("mainPlaceHolder_ContentPlaceHolder_txtMiddleInitials",driver)
        self.email.enter("mainPlaceHolder_ContentPlaceHolder_txtEmail",driver)
        self.email.enter("mainPlaceHolder_ContentPlaceHolder_txtConfirmEmail",driver)
        self.phone.enter("mainPlaceHolder_ContentPlaceHolder_txtWorkTelephone",driver)
        self.mothers_maiden.enter("mainPlaceHolder_ContentPlaceHolder_txtAnswer",driver)

        username_input = driver.find_element(By.ID, "mainPlaceHolder_ContentPlaceHolder_txtUserName")
        username_input.send_keys(username + self.initials.var)

        AU_button = driver.find_element(By.ID,"mainPlaceHolder_ContentPlaceHolder_chkListRoles_0")
        AU_button.click()

        question_selector = driver.find_element(By.ID, "mainPlaceHolder_ContentPlaceHolder_ddlSecretQuestions")
        select = Select(question_selector)
        select.select_by_value("1")

        #submit form
        submit_button = driver.find_element(By.ID, "mainPlaceHolder_ContentPlaceHolder_btnNext")
        submit_button.click()

        #continue
        continue_button = driver.find_element(By.ID, "mainPlaceHolder_ContentPlaceHolder_btnRequestContinue")
        continue_button.click()



        #get password character indices:
        pass_message_element = driver.find_element(By.ID, "pPassword")
        pass_message = pass_message_element.text
        passindex = re.findall(r'\d+', pass_message)

        char1 = driver.find_element(By.ID, "txtPasswordChar1")
        char2 = driver.find_element(By.ID, "txtPasswordChar2")
        char3 = driver.find_element(By.ID, "txtPasswordChar3")

        index1 = int(passindex[0]) - 1
        index2 = int(passindex[1]) - 1
        index3 = int(passindex[2]) - 1

        char1.send_keys(password[index1])
        char2.send_keys(password[index2])
        char3.send_keys(password[index3])

        cont_button =driver.find_element(By.ID, "mainPlaceHolder_ContentPlaceHolder_VerifyAdditionalAccount1_btnContinue")
        cont_button.click()

class LoginFailed(Exception):
    def __init__(self, username):
        self.username = username
        super().__init__(f"INCORRECT PASSWORD FOR {username}")


def getbool(input):
    boolean = {'TRUE': True, 'FALSE': False}
    return boolean.get(input.upper())

rhi_col = utils.a1_to_rowcol('D1')[1]; userpass_col = 3
last_login_col = utils.a1_to_rowcol('X1')[1]
dates_col = utils.a1_to_rowcol('K1')[1]; 
fdates_col = utils.a1_to_rowcol('Y1')[1]


if __name__ == "__main__":

    worksheet, client = connect_to_sheet('RHI Complex (Working edit)','RHI Meters Complex')

    #get data from google sheet
    rhis, usernames, passwords, last_login_succesful, old_dates, first_dates = get_logins(rhi_col,
     userpass_col, last_login_col, dates_col, fdates_col, worksheet)

    new_dates = old_dates
    new_fdates = first_dates

    #create list of usernames, passwords and associated RHI numbers
    rhi_users = []
    for [username,indices] in condense_list_with_indices(usernames):
        rhi_users.append([username, passwords[indices[0]], [rhis[i] for i in indices], indices])

    #rhi_users = [rhi_users[1]] #uncomment this line to only run the code for one ORG

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
                    #fdates = get_first_submission_date(user[2], driver)

                    RHI_logout(driver)

                    for rhi in dates: 
                        for index in indices:
                            if rhis[index] == rhi[0]: #identify index of this RHI number
                                #update date
                                new_dates[index] = rhi[1]
                    
                    #for rhi in fdates: 
                        #for index in indices:
                            #if rhis[index] == rhi[0]: #identify index of this RHI number
                                #update date
                                #new_fdates[index] = rhi[1]

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
    
    #worksheet.update(utils.rowcol_to_a1(2,fdates_col) + ':' + 
    #                 utils.rowcol_to_a1(worksheet.row_count,fdates_col), 
   #                  [[i] for i in new_fdates])
    
    worksheet.format(utils.rowcol_to_a1(2,fdates_col) + ':' + 
                     utils.rowcol_to_a1(worksheet.row_count,fdates_col), { "numberFormat": { "type": "DATE","pattern": "d\" \"mmm\" \"yyyy"}})

    worksheet.update(utils.rowcol_to_a1(2,last_login_col) + ':' + 
                    utils.rowcol_to_a1(worksheet.row_count,last_login_col), 
                    [[i] for i in last_login_succesful])
    
    logging.info("done")

