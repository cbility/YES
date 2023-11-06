import logging
import gspread
import gspread.utils as utils
from oauth2client.service_account import ServiceAccountCredentials

#from RO import gspread_connect_to_sheet, logging, utils


def gspread_connect_to_sheet(doc_name, sheet_name):
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


def gspread_get_RO_data(worksheet,
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


def gspread_update_ROCs():

    worksheet, client = gspread_connect_to_sheet('ES Ongoing Support Services','ROC FiT Meters')

    worksheet.update(utils.rowcol_to_a1(2,ROCs_sent_col) + ':' +
                    utils.rowcol_to_a1(worksheet.row_count, ROCs_sent_col),
                    [[i] for i in ROCs_sent])

    worksheet.update(utils.rowcol_to_a1(2,ROCs_sent_date_col) + ':' +
                utils.rowcol_to_a1(worksheet.row_count, ROCs_sent_date_col),
                [[i] for i in ROCs_sent_date])

    worksheet.format(utils.rowcol_to_a1(2,ROCs_sent_date_col) + ':' +
                    utils.rowcol_to_a1(worksheet.row_count,ROCs_sent_date_col), { "numberFormat": { "type": "DATE","pattern": "d\" \"mmm\" \"yyyy"}})


def gspread_update_REGOs():

    worksheet, client = gspread_connect_to_sheet('ES Ongoing Support Services','ROC FiT Meters')

    worksheet.update(utils.rowcol_to_a1(2,REGOs_sent_col) + ':' +
                    utils.rowcol_to_a1(worksheet.row_count, REGOs_sent_col),
                    [[i] for i in REGOs_sent])

    worksheet.update(utils.rowcol_to_a1(2,REGOs_sent_date_col) + ':' +
                utils.rowcol_to_a1(worksheet.row_count, REGOs_sent_date_col),
                [[i] for i in REGOs_sent_date])

    worksheet.format(utils.rowcol_to_a1(2,REGOs_sent_date_col) + ':' +
                    utils.rowcol_to_a1(worksheet.row_count,REGOs_sent_date_col), { "numberFormat": { "type": "DATE","pattern": "d\" \"mmm\" \"yyyy"}})


def gspread_getbool(input):
    boolean = {'TRUE': True, 'FALSE': False}
    return boolean.get(input.upper())


def gspread_set_RO_transfer_details():
    stationName_col = utils.a1_to_rowcol('C1')[1]; userpass_col = 4
    ROC_sup_num_col = utils.a1_to_rowcol('X1')[1]
    ROCs_sent_col = utils.a1_to_rowcol('AE1')[1]
    ROCs_sent_date_col = utils.a1_to_rowcol('AD1')[1]
    REGO_sup_num_col = utils.a1_to_rowcol('AJ1')[1]
    REGOs_sent_col = utils.a1_to_rowcol('AQ1')[1]
    REGOs_sent_date_col = utils.a1_to_rowcol('AP1')[1]
    last_login_col = utils.a1_to_rowcol('AX1')[1]

    input(f"Is the 'Latest number of ROCs sent (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_col)}?")
    input(f"Is the 'Last date ROCs sent to suppliers (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_date_col)}?")
    input(f"Is the 'Last date REGO's sent to supplier (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_date_col)}?")
    input(f"Is the 'Latest number of REGOs sent (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_col)}?")
    input(f"Is the 'Last Login successful' column still {utils.rowcol_to_a1(1,last_login_col)}?")

    return stationName_col,userpass_col,ROC_sup_num_col,ROCs_sent_col,ROCs_sent_date_col,REGO_sup_num_col,REGOs_sent_col,REGOs_sent_date_col,last_login_col


def gspread_update_stats(oldest_ROCs_not_issued, oldest_ROCs_not_issued_col, oldest_REGOs_not_issued, oldest_REGOs_not_issued_col, oldest_ROCs_pending, oldest_ROCs_pending_col, oldest_REGOs_pending, oldest_REGOs_pending_col,
                       ROCs_pending_transfer, ROCs_pending_transfer_col, REGOs_pending_transfer, REGOs_pending_transfer_col):
    worksheet, client = gspread_connect_to_sheet('ES Ongoing Support Services','ROC FiT Meters')

    stats = [[oldest_ROCs_not_issued, oldest_ROCs_not_issued_col],
    [oldest_REGOs_not_issued, oldest_REGOs_not_issued_col],
    [oldest_ROCs_pending, oldest_ROCs_pending_col],
    [oldest_REGOs_pending, oldest_REGOs_pending_col],
    [ROCs_pending_transfer, ROCs_pending_transfer_col],
    [REGOs_pending_transfer, REGOs_pending_transfer_col]]

    i=0
    for stat in stats:
        worksheet.update(utils.rowcol_to_a1(2,stat[1]) + ':' +
                    utils.rowcol_to_a1(worksheet.row_count, stat[1]),
                    [[j] for j in stat[0]])
        if i<4:
            worksheet.format(utils.rowcol_to_a1(2,stat[1]) + ':' +
                    utils.rowcol_to_a1(worksheet.row_count,stat[1]), { "numberFormat": { "type": "DATE","pattern": "mmm yyyy"}})
        i+=1


def gspread_get_RHI_users(rhi_col, userpass_col, last_login_col, dates_col, fdates_col):

    worksheet, client = gspread_connect_to_sheet('RHI Complex (Working edit)','RHI Meters Complex')

    #get data from google sheet
    rhi_users, last_login_succesful, old_dates, first_dates = gspread_get_RHI_logins(rhi_col,
     userpass_col, last_login_col, dates_col, fdates_col, worksheet)


    return old_dates,last_login_succesful, rhi_users


def gspread_get_RHI_logins(rhi_column, username_column, last_login_column, dates_column, fdates_col, worksheet):

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

    rhi_users = []

    for [username,indices] in condense_list_with_indices(usernames):
        rhi_users.append([username, passwords[indices[0]], [rhis[i] for i in indices], indices])

    return rhis, usernames, passwords, last_login_succesful, old_dates, first_dates