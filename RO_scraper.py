from RO import *
from RO import gspread_set_RO_stats
from RO import gspread_get_RO_stats
from RO import get_pending_certificates
from RO import get_oldest_not_issued_dates

from gspread_functions import gspread_getbool, gspread_update_stats


if __name__ == "__main__":

    worksheet, stationNames, usernames, passwords, last_login_succesful, oldest_ROCs_not_issued, oldest_REGOs_not_issued, ROCs_pending_transfer, REGOs_pending_transfer, oldest_ROCs_pending, oldest_REGOs_pending = gspread_get_RO_stats(gspread_set_RO_stats)

    import init

    head_options.add_argument('--log-level=2')  # INFO = 0, WARNING = 1, LOG_ERROR = 2, LOG_FATAL = 3. Default is 0.

    with init.bootstrap(local_driver=True, local_logging=True) as driver:


    #if True:
        #driver = webdriver.Firefox()
        #driver.implicitly_wait(1)

        for i in range(len(stationNames)):
            logging.info(f"Row in google sheet: {i}")
            try:
                if gspread_getbool(last_login_succesful[i]):

                    RO_login(usernames[i], passwords[i], driver)

                    oldest_ROCs_not_issued[i], oldest_REGOs_not_issued[i] = get_oldest_not_issued_dates(stationNames[i], usernames[i], 
                                                                                                      oldest_ROCs_not_issued, oldest_REGOs_not_issued, driver)

                    ROCs_pending_transfer[i], REGOs_pending_transfer[i], oldest_ROCs_pending[i], oldest_REGOs_pending[i] = get_pending_certificates(stationNames[i], usernames[i], driver)

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
                
    gspread_update_stats(oldest_ROCs_not_issued, oldest_REGOs_not_issued, oldest_ROCs_pending, oldest_REGOs_pending, 
                       ROCs_pending_transfer, REGOs_pending_transfer)       
         
    logging.info("done")

