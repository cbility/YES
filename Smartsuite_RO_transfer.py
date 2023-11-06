from oauth2client.service_account import ServiceAccountCredentials
import gspread
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, StaleElementReferenceException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options
import gspread.utils as utils
import logging
import pandas as pd
import datetime

def bootstrap(local_env: bool):
    global logging
    if local_env:
        import logging as real_logging
        logging = real_logging
        loglevel = logging.INFO
        logging.basicConfig(level=loglevel, format='%(asctime)s - %(levelname)s - %(message)s')
    else:
        class MockLogging:
            def get_current_time(self):
                current_time = datetime.datetime.now()
                formatted_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
                return formatted_time
            def info(self, msg):
                print(self.get_current_time(),"-info-",msg)
            def debug(self, msg):
                print(self.get_current_time(),"-debug-",msg)
            def warning(self, msg):
                print(self.get_current_time(),"-warning-",msg)
            def error(self, msg):
                print(self.get_current_time(),"-error-",msg)
        logging = MockLogging()


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


def get_sheet_data(worksheet,
    stationName_col = None,
    userpass_col = None,
    ROC_sup_num_col = None,
    ROCs_sent_col = None,
    ROCs_sent_date_col = None,
    REGO_sup_num_col = None,
    REGOs_sent_col = None,
    REGOs_sent_date_col = None,
    last_login_col = None,
    oldest_ROCs_not_issued_col = None,
    oldest_REGOs_not_issued_col = None,
    ROCs_pending_transfer_col = None,
    REGOs_pending_transfer_col = None,
    oldest_ROCs_pending_col = None,
    oldest_REGOs_pending_col = None,
    ):

    #initialise outputs

    stationNames, usernames, passwords, last_login_succesful, ROC_sup_num, ROCs_sent, ROCs_sent_date, \
        REGO_sup_num, REGOs_sent, REGOs_sent_date, oldest_ROCs_not_issued, oldest_REGOs_not_issued, \
            ROCs_pending_transfer, REGOs_pending_transfer, oldest_ROCs_pending, oldest_REGOs_pending = [None] * 16

    #get station names
    stationNames = worksheet.col_values(stationName_col)[1:]
    #clean station names
    stationNames = [i.strip() for i in stationNames]

    #get usernames and passwords
    username_passwords = worksheet.col_values(userpass_col)[1:]

    #remove extra spaces and extra usernames and passwords
    username_passwords_cleaned= []
    for user_pass_sets in username_passwords:
 
        clean=[]
        this_user_pass_sets = user_pass_sets.split('\n')
        this_user_pass_sets.reverse()
        logging.debug(this_user_pass_sets)
        for i in this_user_pass_sets:
            if i.strip() != "": #if i is not whitespace
                clean.append(i.strip())
        username_passwords_cleaned.append(clean)

    usernames = [i[1] for i in username_passwords_cleaned]
    passwords = [i[0] for i in username_passwords_cleaned]

    #get password safety net
    last_login_succesful = worksheet.col_values(last_login_col)[1:]

    #get old values
    if all(value is not None for value in [ROC_sup_num_col, ROCs_sent_col, ROCs_sent_date_col, 
                                           REGO_sup_num_col, REGOs_sent_col, REGOs_sent_date_col]):
        ROC_sup_num = worksheet.col_values(ROC_sup_num_col)[1:]
        ROCs_sent = worksheet.col_values(ROCs_sent_col)[1:]
        ROCs_sent_date = worksheet.col_values(ROCs_sent_date_col)[1:]
        REGO_sup_num = worksheet.col_values(REGO_sup_num_col)[1:]
        REGOs_sent = worksheet.col_values(REGOs_sent_col)[1:]
        REGOs_sent_date = worksheet.col_values(REGOs_sent_date_col)[1:]
    if all(value is not None for value in [oldest_REGOs_not_issued_col, oldest_ROCs_not_issued_col, 
                                           ROCs_pending_transfer_col, REGOs_pending_transfer_col, 
                                           oldest_REGOs_pending_col, oldest_REGOs_pending_col]):
        oldest_ROCs_not_issued = worksheet.col_values(oldest_ROCs_not_issued_col)[1:]
        oldest_REGOs_not_issued = worksheet.col_values(oldest_REGOs_not_issued_col)[1:]
        ROCs_pending_transfer = worksheet.col_values(ROCs_pending_transfer_col)[1:]
        REGOs_pending_transfer = worksheet.col_values(REGOs_pending_transfer_col)[1:]
        oldest_ROCs_pending = worksheet.col_values(oldest_ROCs_pending_col)[1:]
        oldest_REGOs_pending = worksheet.col_values(oldest_REGOs_pending_col)[1:]
    
    return stationNames, usernames, passwords, last_login_succesful, ROC_sup_num \
            ,ROCs_sent, ROCs_sent_date, REGO_sup_num, REGOs_sent, REGOs_sent_date, \
            oldest_ROCs_not_issued, oldest_REGOs_not_issued, ROCs_pending_transfer, \
            REGOs_pending_transfer, oldest_ROCs_pending, oldest_REGOs_pending

def RO_login(username, password, driver):

    #Navigate to RO portal
    driver.get("https://renewablesandchp.ofgem.gov.uk/")

    #enter username and password
    username_field = driver.find_element(By.ID, "txtUsername")
    username_field.send_keys(username)

    password_field = driver.find_element(By.ID, "txtPassword")
    password_field.send_keys(password)

    #submit form and log in
    submit_button = driver.find_element(By.ID, "btnSubmit")
    submit_button.click()

    #check login was successful
    try:
        driver.find_element(By.ID, "lblNotLogIn")
        raise LoginFailed(username)
    except NoSuchElementException:
        # Login was successful
        logging.info(username + ": Login successful")

def RO_logout(driver):
    max_retries = 3
    skip = False

    if not(skip):
        for retry in range(max_retries):
            try:
                logout_button = driver.find_element(By.ID,"ctl00_hprTopNavigation")
                logout_button.click()
                break
            except (StaleElementReferenceException, NoSuchElementException) as exc:
                logging.warning(exc)
                logging.warning(f"Attempt {retry + 1} of {max_retries} failed")
                input()
                if retry + 1 == max_retries: 
                    logging.error("Logout button click failed. Continuing...")
                    skip = True
    if not(skip):
        for retry in range(max_retries):
            try:
                confirm_logout_button = driver.find_element(By.ID,"ctl00_ContentPlaceHolder_btnLogoutYes")
                confirm_logout_button.click()
                break
            except (StaleElementReferenceException, NoSuchElementException) as exc:
                logging.warning(exc)
                logging.warning(f"Attempt {retry + 1} of {max_retries} failed")
                for retry in range(max_retries):

                    try:
                        logout_button = driver.find_element(By.ID,"ctl00_hprTopNavigation")
                        logout_button.click()
                        break
                    except (StaleElementReferenceException, NoSuchElementException) as exc:
                        logging.warning(exc)
                        logging.warning(f"Attempt {retry + 1} of {max_retries} failed")
                        input()
                        if retry + 1 == max_retries: 
                            logging.error("Logout button click failed. Continuing...")

                if retry + 1 == max_retries: 
                    logging.error("Confirm logout button click failed. Continuing...")
                    skip = True

def transfer_certs(generatorName, type, transfereeNum, password, driver):

    transfereeNum = Input(transfereeNum)
    password = Input(password)

    type = type.lower()
    if not(type=='roc' or type=='rego'):
        raise NotValidCertificate(type)

    #navigate to certificates page
    driver.get("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/default.aspx")

    try:
        certificatesElement = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_gvCertificates")

        # Get the HTML content of the table
        certificatesHtml = certificatesElement.get_attribute("outerHTML")

        # Use Pandas to read HTML and convert it to a DataFrame
        certificates = pd.read_html(certificatesHtml)[0]
        logging.debug(certificates.iloc[:, 0].str.contains(type.upper()).any())

    except NoSuchElementException: # if there is no table
        logging.info(f"No {type.upper()} certificates found for {generatorName}")
        certsTransferred = 0
        return certsTransferred

    if certificates.iloc[:, 0].str.contains(type.upper()).any(): #if there are any certificates of the specified type 
        if (transfereeNum.text[:3] == "PAR" or transfereeNum.text[:3] == "SUP"): #if we have a valid transfer number stored

            #navigate to transfer page for the specified type
            driver.get(f"https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/SchemeOptions.aspx?scheme={type}")
            driver.get(f"https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestCreate.aspx?scheme={type}")
            
            #select generating station
            stationSelector = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_ddlGeneratorName")
            select = Select(stationSelector)
            validStations = [i.text for i in select.options[1:]] #save stations that can currently transfer this certificate

            logging.debug(validStations)

            #enter transferee number in relevant input box
            transfereeNum.enter("ctl00_ContentPlaceHolder_txtTransfereeReference", driver) 

            try:
                found = False #check if correct generator found
                for option in select.options:
                    valid_generator = option.text
                    if (valid_generator == generatorName):
                        logging.debug(generatorName + " selected")
                        #select generator
                        value = option.get_attribute("value")
                        select.select_by_value(value)
                        found = True

                if not(found):
                    raise NoSuchElementException

                startDateSelector = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_ddlOutputPeriodStartDate")
                select = Select(startDateSelector)
                select.select_by_index(1) #select earliest date

                #apply filter
                applyButton = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_btnApplyFilter")
                applyButton.click()

                #select all
                selectAllButton = driver.find_element(By.ID,"ctl00_ContentPlaceHolder_chkSelectAll")
                selectAllButton.click()

                #submit
                submitButton = driver.find_element(By.ID,"ctl00_ContentPlaceHolder_btnSubmit")
                submitButton.click()

                #transfer certificates
                transferTableElement = driver.find_element(By.ID,"ctl00_ContentPlaceHolder_gvCertificates")
                transferTable = pd.read_html(transferTableElement.get_attribute("outerHTML"))

                certsTransferred = transferTable[0].iloc[-1,-3]

                proceedButton = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_btnContinue")
                proceedButton.click()

                password.enter("ctl00_ContentPlaceHolder_VerifyUser1_txtPassword", driver)
                #submit password
                submitButton = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_VerifyUser1_btnSubmitPassword")
                submitButton.click() #uncomment to transfer certificates

                logging.info(f"{certsTransferred} {type.upper()} certificates transferred")

            except NoSuchElementException:
                logging.warning(f"No {type.upper()} certificates found for {generatorName}, but there are valid {type.upper()} certificates on this account")
                logging.info(f"There are {len(validStations)} station(s) with {type.upper()} certificates on this account:")
                for station in validStations:
                    logging.info(station)
                certsTransferred = 0

        else: #no valid transfer number stored
            logging.warning(f"Invalid transfer number {transfereeNum.text} for {generatorName}")
            certsTransferred = 0
    else: #no certificates of this type
        logging.info(f"No {type.upper()} certificates found for {generatorName}")
        certsTransferred = 0

    return certsTransferred

def update_sheet_ROCs():

    worksheet, client = connect_to_sheet('ES Ongoing Support Services','ROC FiT Meters')
    
    worksheet.update(utils.rowcol_to_a1(2,ROCs_sent_col) + ':' + 
                    utils.rowcol_to_a1(worksheet.row_count, ROCs_sent_col), 
                    [[i] for i in ROCs_sent])
    
    worksheet.update(utils.rowcol_to_a1(2,ROCs_sent_date_col) + ':' + 
                utils.rowcol_to_a1(worksheet.row_count, ROCs_sent_date_col), 
                [[i] for i in ROCs_sent_date])

    worksheet.format(utils.rowcol_to_a1(2,ROCs_sent_date_col) + ':' + 
                    utils.rowcol_to_a1(worksheet.row_count,ROCs_sent_date_col), { "numberFormat": { "type": "DATE","pattern": "d\" \"mmm\" \"yyyy"}})

def update_sheet_REGOs():

    worksheet, client = connect_to_sheet('ES Ongoing Support Services','ROC FiT Meters')

    worksheet.update(utils.rowcol_to_a1(2,REGOs_sent_col) + ':' + 
                    utils.rowcol_to_a1(worksheet.row_count, REGOs_sent_col), 
                    [[i] for i in REGOs_sent])
    
    worksheet.update(utils.rowcol_to_a1(2,REGOs_sent_date_col) + ':' + 
                utils.rowcol_to_a1(worksheet.row_count, REGOs_sent_date_col), 
                [[i] for i in REGOs_sent_date])

    worksheet.format(utils.rowcol_to_a1(2,REGOs_sent_date_col) + ':' + 
                    utils.rowcol_to_a1(worksheet.row_count,REGOs_sent_date_col), { "numberFormat": { "type": "DATE","pattern": "d\" \"mmm\" \"yyyy"}})

class Input:
    def __init__(self, text):
        self.text = text

    def enter(self, id, driver):
        field = driver.find_element(By.ID, id)
        field.send_keys(self.text)

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
    
class LoginFailed(Exception):
    def __init__(self, username):
        self.username = username
        super().__init__(f"INCORRECT PASSWORD FOR {username}")

class NotValidCertificate(Exception):
    def __init__(self, certificateType):
        self.certificateType = certificateType
        super().__init__(f"{certificateType} is not a valid certificate. Please enter 'ROC' or 'REGO'.")

def getbool(input):
    boolean = {'TRUE': True, 'FALSE': False}
    return boolean.get(input.upper())

def cancel_all_transfers():

    input(f"Is the 'Latest number of ROCs sent (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_col)}?")
    input(f"Is the 'Last date ROCs sent to suppliers (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_date_col)}?")
    input(f"Is the 'Last date REGO's sent to supplier (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_date_col)}?")
    input(f"Is the 'Latest number of REGOs sent (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_col)}?")
    input(f"Is the 'Last Login successful' column still {utils.rowcol_to_a1(1,last_login_col)}?")

    worksheet, client = connect_to_sheet('ES Ongoing Support Services','ROC FiT Meters')

    #get data from google sheet
    stationNames, \
    usernames, \
    passwords, \
    last_login_succesful, \
    ROC_sup_num, \
    ROCs_sent, \
    ROCs_sent_date, \
    REGO_sup_num, \
    REGOs_sent, \
    REGOs_sent_date = get_sheet_data(
    stationName_col=stationName_col,
    userpass_col=userpass_col,
    ROC_sup_num_col=ROC_sup_num_col,
    ROCs_sent_col=ROCs_sent_col,
    ROCs_sent_date_col=ROCs_sent_date_col,
    REGO_sup_num_col=REGO_sup_num_col,
    REGOs_sent_col=REGOs_sent_col,
    REGOs_sent_date_col=REGOs_sent_date_col,
    last_login_col=last_login_col,
    worksheet=worksheet
    )

    if True:
        driver = webdriver.Firefox()
        driver.implicitly_wait(1)

        for i in range(len(stationNames)):
            logging.info(f"Row in google sheet: {i}")
            try:
                if getbool(last_login_succesful[i]):

                    RO_login(usernames[i], passwords[i], driver)

                    try:

                        driver.get("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestView.aspx?scheme=rego")

                        select_all_butt = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_chkSelectAll")
                        select_all_butt.click()
                        
                        cancel_butt = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_btnCancelTransferRequests")
                        cancel_butt.click()

                        proceed_butt = driver.find_element(By.ID,"ctl00_ContentPlaceHolder_btnProceed")
                        proceed_butt.click()

                        password_field = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_VerifyUser1_txtPassword")
                        password_field.send_keys()

                    except NoSuchElementException:
                        logging.warning(f"No REGO transfers for {usernames[i]}")

                    try:

                        driver.get("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestView.aspx?scheme=roc")

                        select_all_butt = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_chkSelectAll")
                        select_all_butt.click()
                        
                        cancel_butt = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_btnCancelTransferRequests")
                        cancel_butt.click()

                        proceed_butt = driver.find_element(By.ID,"ctl00_ContentPlaceHolder_btnProceed")
                        proceed_butt.click()

                        password_field = driver.find_element(By.ID, "ctl00_ContentPlaceHolder_VerifyUser1_txtPassword")
                        password_field.send_keys()

                    except NoSuchElementException:
                        logging.warning(f"No ROC transfers for {usernames[i]}")

                    RO_logout(driver)

                else:
                    logging.warning(f"{usernames[i]} skipped: password incorrect")

            except LoginFailed as exc:
                logging.warning(exc)
                #Make sure username is not retried
                last_login_succesful[i] = False

                #push update to sheet
                worksheet.update(utils.rowcol_to_a1(2,last_login_col) + ':' + 
                        utils.rowcol_to_a1(worksheet.row_count,last_login_col), 
                        [[i] for i in last_login_succesful])
                
    logging.info("done")

stationName_col = utils.a1_to_rowcol('C1')[1]; userpass_col = 4
ROC_sup_num_col = utils.a1_to_rowcol('X1')[1]
ROCs_sent_col = utils.a1_to_rowcol('AE1')[1]; 
ROCs_sent_date_col = utils.a1_to_rowcol('AD1')[1]
REGO_sup_num_col = utils.a1_to_rowcol('AJ1')[1]
REGOs_sent_col = utils.a1_to_rowcol('AQ1')[1]; 
REGOs_sent_date_col = utils.a1_to_rowcol('AP1')[1]
last_login_col = utils.a1_to_rowcol('AX1')[1]

if __name__ == "__main__":

    bootstrap(local_env=True)

    input(f"Is the 'Latest number of ROCs sent (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_col)}?")
    input(f"Is the 'Last date ROCs sent to suppliers (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_date_col)}?")
    input(f"Is the 'Last date REGO's sent to supplier (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_date_col)}?")
    input(f"Is the 'Latest number of REGOs sent (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_col)}?")
    input(f"Is the 'Last Login successful' column still {utils.rowcol_to_a1(1,last_login_col)}?")
    

    worksheet, client = connect_to_sheet('ES Ongoing Support Services','ROC FiT Meters')

    #get data from google sheet
    stationNames, \
    usernames, \
    passwords, \
    last_login_succesful, \
    ROC_sup_num, \
    ROCs_sent, \
    ROCs_sent_date, \
    REGO_sup_num, \
    REGOs_sent, \
    REGOs_sent_date, _, _, _, _, _, _ = get_sheet_data(
    stationName_col=stationName_col,
    userpass_col=userpass_col,
    ROC_sup_num_col=ROC_sup_num_col,
    ROCs_sent_col=ROCs_sent_col,
    ROCs_sent_date_col=ROCs_sent_date_col,
    REGO_sup_num_col=REGO_sup_num_col,
    REGOs_sent_col=REGOs_sent_col,
    REGOs_sent_date_col=REGOs_sent_date_col,
    last_login_col=last_login_col,
    worksheet=worksheet
    )

    #choose web driver
   
    head_options = Options()
    head_options.add_argument('-headless')  #uncomment this line to run in background

    with webdriver.Firefox(options=head_options) as driver:
    #if True:
        #driver = webdriver.Firefox()
        #driver.implicitly_wait(1)

        for i in range(len(stationNames)):
            logging.info(f"Row in google sheet: {i}")
            try:
                if getbool(last_login_succesful[i]):

                    RO_login(usernames[i], passwords[i], driver)

                    this_ROCs_sent = transfer_certs(stationNames[i], "ROC", ROC_sup_num[i], passwords[i], driver)
                    if this_ROCs_sent > 0:
                        ROCs_sent[i] = str(this_ROCs_sent)
                        ROCs_sent_date[i] = str(datetime.now().date())
                        update_sheet_ROCs()

                    this_REGOs_sent = transfer_certs(stationNames[i], "REGO", REGO_sup_num[i], passwords[i], driver)
                    if this_REGOs_sent > 0:
                        REGOs_sent[i] = str(this_REGOs_sent)
                        REGOs_sent_date[i] = str(datetime.now().date())
                        update_sheet_REGOs()

                    RO_logout(driver)

                else:
                    logging.warning(f"{usernames[i]} skipped: password incorrect")

            except LoginFailed as exc:
                logging.warning(exc)
                #Make sure username is not retried
                last_login_succesful[i] = False

                #push update to sheet
                worksheet.update(utils.rowcol_to_a1(2,last_login_col) + ':' + 
                        utils.rowcol_to_a1(worksheet.row_count,last_login_col), 
                        [[i] for i in last_login_succesful])
                
    logging.info("done")

