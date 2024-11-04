import re
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.common.exceptions import (
    NoSuchElementException,
    StaleElementReferenceException,
)
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options
import gspread.utils as utils
import logging
import pandas as pd
from datetime import datetime
from io import StringIO

import gspread_functions as gspread_functions  #

# import common.gspread_functions as gspread_functions

# from RO import By, NoSuchElementException, Select, gspread_connect_to_sheet, gspread_get_RO_data, last_login_col, logger, pd, stationName_col, userpass_col, utils
from init import bootstrap

# from common.init import bootstrap

from gspread_functions import (  #
    # from common.gspread_functions import (
    gspread_connect_to_sheet,
    gspread_get_RO_data,
    gspread_getbool,
    gspread_set_RO_transfer_details,
    gspread_update_REGOs,
    gspread_update_ROCs,
)

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)  # Set the desired logger level for this logger


def RO_login(username, password, driver):
    # Navigate to RO portal
    driver.get("https://renewablesandchp.ofgem.gov.uk/")

    # enter username and password
    username_field = driver.find_element(By.ID, "txtUsername")
    username_field.send_keys(username)

    password_field = driver.find_element(By.ID, "txtPassword")
    password_field.send_keys(password)

    # submit form and log in
    submit_button = driver.find_element(By.ID, "btnSubmit")
    submit_button.click()

    # check login was successful
    try:
        driver.find_element(By.ID, "lblNotLogIn")
        raise LoginFailed(username)
    except NoSuchElementException:
        # Login was successful
        logger.info(username + ": Login successful")


def RO_logout(driver):
    max_retries = 3
    skip = False

    if not (skip):
        for retry in range(max_retries):
            try:
                logout_button = driver.find_element(By.ID, "ctl00_hprTopNavigation")
                logout_button.click()
                break
            except (StaleElementReferenceException, NoSuchElementException) as exc:
                logger.warning(exc)
                logger.warning(f"Attempt {retry + 1} of {max_retries} failed")
                input()
                if retry + 1 == max_retries:
                    logger.error("Logout button click failed. Continuing...")
                    skip = True
    if not (skip):
        for retry in range(max_retries):
            try:
                confirm_logout_button = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_btnLogoutYes"
                )
                confirm_logout_button.click()
                break
            except (StaleElementReferenceException, NoSuchElementException) as exc:
                logger.warning(exc)
                logger.warning(f"Attempt {retry + 1} of {max_retries} failed")
                for retry in range(max_retries):
                    try:
                        logout_button = driver.find_element(
                            By.ID, "ctl00_hprTopNavigation"
                        )
                        logout_button.click()
                        break
                    except (
                        StaleElementReferenceException,
                        NoSuchElementException,
                    ) as exc:
                        logger.warning(exc)
                        logger.warning(f"Attempt {retry + 1} of {max_retries} failed")
                        input()
                        if retry + 1 == max_retries:
                            logger.error("Logout button click failed. Continuing...")

                if retry + 1 == max_retries:
                    logger.error("Confirm logout button click failed. Continuing...")
                    skip = True


def transfer_certs(generatorName, type_, transfereeNum, password, driver):
    transfereeNum = Input(transfereeNum)
    password = Input(password)

    type_ = type_.lower()
    if not (type_ == "roc" or type_ == "rego"):
        raise NotValidCertificate(type_)

    # navigate to certificates page
    driver.get("https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/default.aspx")

    try:
        certificatesElement = driver.find_element(
            By.ID, "ctl00_ContentPlaceHolder_gvCertificates"
        )

        # Get the HTML content of the table
        certificatesHtml = certificatesElement.get_attribute("outerHTML")

        # Use Pandas to read HTML and convert it to a DataFrame
        certificates = pd.read_html(StringIO(certificatesHtml))[0]
        logger.debug(certificates.iloc[:, 0].str.contains(type_.upper()).any())

    except NoSuchElementException:  # if there is no table
        logger.info(f"No {type_.upper()} certificates found for {generatorName}")
        certsTransferred = 0
        return certsTransferred

    if (
        certificates.iloc[:, 0].str.contains(type_.upper()).any()
    ):  # if there are any certificates of the specified type
        if (
            transfereeNum.text[:3] == "PAR" or transfereeNum.text[:3] == "SUP"
        ):  # if we have a valid transfer number stored
            # navigate to transfer page for the specified type
            driver.get(
                f"https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/SchemeOptions.aspx?scheme={type_}"
            )
            driver.get(
                f"https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestCreate.aspx?scheme={type_}"
            )

            # select generating station
            stationSelector = driver.find_element(
                By.ID, "ctl00_ContentPlaceHolder_ddlGeneratorName"
            )
            select = Select(stationSelector)
            validStations = [
                i.text for i in select.options[1:]
            ]  # save stations that can currently transfer this certificate

            # enter transferee number in relevant input box
            transfereeNum.enter(
                "ctl00_ContentPlaceHolder_txtTransfereeReference", driver
            )

            try:
                found = False  # check if correct generator found
                stationSelector = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_ddlGeneratorName"
                )
                select = Select(stationSelector)
                for option in select.options:
                    valid_generator = option.text
                    if valid_generator == generatorName:
                        logger.debug(generatorName + " selected")
                        # select generator
                        value = option.get_attribute("value")
                        select.select_by_value(value)
                        found = True
                        break

                if not (found):
                    raise NoSuchElementException

                startDateSelector = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_ddlOutputPeriodStartDate"
                )
                select = Select(startDateSelector)
                select.select_by_index(1)  # select earliest date

                # apply filter
                applyButton = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_btnApplyFilter"
                )
                applyButton.click()

                # select all
                selectAllButton = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_chkSelectAll"
                )
                selectAllButton.click()

                # submit
                submitButton = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_btnSubmit"
                )
                submitButton.click()

                # transfer certificates
                transferTableElement = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_gvCertificates"
                )
                transferTable = pd.read_html(
                    StringIO(transferTableElement.get_attribute("outerHTML"))
                )

                certsTransferred = transferTable[0].iloc[-1, -3]

                proceedButton = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_btnContinue"
                )
                proceedButton.click()

                password.enter(
                    "ctl00_ContentPlaceHolder_VerifyUser1_txtPassword", driver
                )
                # submit password
                submitButton = driver.find_element(
                    By.ID, "ctl00_ContentPlaceHolder_VerifyUser1_btnSubmitPassword"
                )
                submitButton.click()  # uncomment to transfer certificates

                logger.info(
                    f"{certsTransferred} {type_.upper()} certificates transferred"
                )

            except NoSuchElementException:
                logger.warning(
                    f"No {type_.upper()} certificates found for {generatorName}, but there are valid {type_.upper()} certificates on this account"
                )
                logger.info(
                    f"There are {len(validStations)} station(s) with {type_.upper()} certificates on this account:"
                )
                for station in validStations:
                    logger.info(station)
                certsTransferred = 0

        else:  # no valid transfer number stored
            logger.warning(
                f"Invalid transfer number {transfereeNum.text} for {generatorName}"
            )
            certsTransferred = 0
    else:  # no certificates of this type
        logger.info(f"No {type_.upper()} certificates found for {generatorName}")
        certsTransferred = 0

    return certsTransferred


def cancel_all_transfers():
    input(
        f"Is the 'Latest number of ROCs sent (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_col)}?"
    )
    input(
        f"Is the 'Last date ROCs sent to suppliers (automated)' column still {utils.rowcol_to_a1(1,ROCs_sent_date_col)}?"
    )
    input(
        f"Is the 'Last date REGO's sent to supplier (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_date_col)}?"
    )
    input(
        f"Is the 'Latest number of REGOs sent (automated)' column still {utils.rowcol_to_a1(1,REGOs_sent_col)}?"
    )
    input(
        f"Is the 'Last Login successful' column still {utils.rowcol_to_a1(1,last_login_col)}?"
    )

    worksheet, client = gspread_connect_to_sheet(
        "ES Ongoing Support Services", "ROC FiT Mtrs"
    )

    # get data from google sheet
    (
        stationNames,
        usernames,
        passwords,
        last_login_succesful,
        ROC_sup_num,
        ROCs_sent,
        ROCs_sent_date,
        REGO_sup_num,
        REGOs_sent,
        REGOs_sent_date,
    ) = gspread_get_RO_data(
        stationName_col=stationName_col,
        userpass_col=userpass_col,
        ROC_sup_num_col=ROC_sup_num_col,
        ROCs_sent_col=ROCs_sent_col,
        ROCs_sent_date_col=ROCs_sent_date_col,
        REGO_sup_num_col=REGO_sup_num_col,
        REGOs_sent_col=REGOs_sent_col,
        REGOs_sent_date_col=REGOs_sent_date_col,
        last_login_col=last_login_col,
        worksheet=worksheet,
    )

    if True:
        driver = webdriver.Firefox()
        driver.implicitly_wait(1)

        for i in range(len(stationNames)):
            logger.info(f"Row in google sheet: {i}")
            try:
                if gspread_getbool(last_login_succesful[i]):
                    RO_login(usernames[i], passwords[i], driver)

                    try:
                        driver.get(
                            "https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestView.aspx?scheme=rego"
                        )

                        select_all_butt = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_chkSelectAll"
                        )
                        select_all_butt.click()

                        cancel_butt = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_btnCancelTransferRequests"
                        )
                        cancel_butt.click()

                        proceed_butt = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_btnProceed"
                        )
                        proceed_butt.click()

                        password_field = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_VerifyUser1_txtPassword"
                        )
                        password_field.send_keys()

                    except NoSuchElementException:
                        logger.warning(f"No REGO transfers for {usernames[i]}")

                    try:
                        driver.get(
                            "https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestView.aspx?scheme=roc"
                        )

                        select_all_butt = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_chkSelectAll"
                        )
                        select_all_butt.click()

                        cancel_butt = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_btnCancelTransferRequests"
                        )
                        cancel_butt.click()

                        proceed_butt = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_btnProceed"
                        )
                        proceed_butt.click()

                        password_field = driver.find_element(
                            By.ID, "ctl00_ContentPlaceHolder_VerifyUser1_txtPassword"
                        )
                        password_field.send_keys()

                    except NoSuchElementException:
                        logger.warning(f"No ROC transfers for {usernames[i]}")

                    RO_logout(driver)

                else:
                    logger.warning(f"{usernames[i]} skipped: password incorrect")

            except LoginFailed as exc:
                logger.warning(exc)
                # Make sure username is not retried
                last_login_succesful[i] = False

                # push update to sheet
                worksheet.update(
                    utils.rowcol_to_a1(2, last_login_col)
                    + ":"
                    + utils.rowcol_to_a1(worksheet.row_count, last_login_col),
                    [[i] for i in last_login_succesful],
                )

    logger.info("done")


def gspread_set_RO_stats(check=True):
    oldest_REGOs_not_issued_col = utils.a1_to_rowcol("AR1")[1]
    oldest_ROCs_not_issued_col = utils.a1_to_rowcol("AF1")[1]
    ROCs_pending_transfer_col = utils.a1_to_rowcol("AH1")[1]
    REGOs_pending_transfer_col = utils.a1_to_rowcol("AS1")[1]
    oldest_ROCs_pending_col = utils.a1_to_rowcol("AI1")[1]
    oldest_REGOs_pending_col = utils.a1_to_rowcol("AT1")[1]
    last_login_col = utils.a1_to_rowcol("AX1")[1]

    if check:
        input(
            f"Is the 'Number of REGOs pending transfer' column still {utils.rowcol_to_a1(1,REGOs_pending_transfer_col)}?"
        )
        input(
            f"Is the 'Oldest date of REGOs pending transfer' column still {utils.rowcol_to_a1(1, oldest_REGOs_pending_col)}?"
        )
        input(
            f"Is the 'Oldest ROCs not issued' column still {utils.rowcol_to_a1(1,oldest_ROCs_not_issued_col)}?"
        )
        input(
            f"Is the 'Oldest REGOs not issued' column still {utils.rowcol_to_a1(1,oldest_REGOs_not_issued_col)}?"
        )
        input(
            f"Is the 'Number of ROCs pending transfer' column still {utils.rowcol_to_a1(1,ROCs_pending_transfer_col)}?"
        )
        input(
            f"Is the 'Oldest date of ROCs pending transfer' column still {utils.rowcol_to_a1(1,oldest_ROCs_pending_col)}?"
        )
        input(
            f"Is the 'Last Login successful' column still {utils.rowcol_to_a1(1,last_login_col)}?"
        )

    return (
        oldest_REGOs_not_issued_col,
        oldest_ROCs_not_issued_col,
        ROCs_pending_transfer_col,
        REGOs_pending_transfer_col,
        oldest_ROCs_pending_col,
        oldest_REGOs_pending_col,
    )


def gspread_get_RO_stats():
    (
        oldest_REGOs_not_issued_col,
        oldest_ROCs_not_issued_col,
        ROCs_pending_transfer_col,
        REGOs_pending_transfer_col,
        oldest_ROCs_pending_col,
        oldest_REGOs_pending_col,
    ) = gspread_set_RO_stats()

    (
        stationName_col,
        userpass_col,
        ROC_sup_num_col,
        ROCs_sent_col,
        ROCs_sent_date_col,
        REGO_sup_num_col,
        REGOs_sent_col,
        REGOs_sent_date_col,
        last_login_col,
    ) = gspread_set_RO_transfer_details()

    worksheet, client = gspread_connect_to_sheet(
        "ES Ongoing Support Services", "ROC FiT Mtrs"
    )

    # get data from google sheet
    (
        stationNames,
        usernames,
        passwords,
        last_login_succesful,
        _,
        _,
        _,
        _,
        _,
        _,
        oldest_ROCs_not_issued,
        oldest_REGOs_not_issued,
        ROCs_pending_transfer,
        REGOs_pending_transfer,
        oldest_ROCs_pending,
        oldest_REGOs_pending,
    ) = gspread_get_RO_data(
        stationName_col=stationName_col,
        userpass_col=userpass_col,
        last_login_col=last_login_col,
        oldest_ROCs_not_issued_col=oldest_ROCs_not_issued_col,
        oldest_REGOs_not_issued_col=oldest_REGOs_not_issued_col,
        ROCs_pending_transfer_col=ROCs_pending_transfer_col,
        REGOs_pending_transfer_col=REGOs_pending_transfer_col,
        oldest_ROCs_pending_col=oldest_ROCs_pending_col,
        oldest_REGOs_pending_col=oldest_REGOs_pending_col,
        worksheet=worksheet,
    )

    return (
        worksheet,
        stationNames,
        usernames,
        passwords,
        last_login_succesful,
        oldest_ROCs_not_issued,
        oldest_REGOs_not_issued,
        ROCs_pending_transfer,
        REGOs_pending_transfer,
        oldest_ROCs_pending,
        oldest_REGOs_pending,
    )


def get_pending_certificates(station_name, username, driver):
    # initialise outputs
    ROCs_pending = 0
    ROCs_pending_date = "NA"
    REGOs_pending = 0
    REGOs_pending_date = "NA"

    for cert in ["roc", "rego"]:
        driver.get(
            f"https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/SchemeOptions.aspx?scheme={cert}"
        )

        driver.get(
            f"https://renewablesandchp.ofgem.gov.uk/CertificateTransfer/TransferRequestView.aspx?scheme={cert}"
        )

        try:
            pending_transfers_element = driver.find_element(
                By.ID, "ctl00_ContentPlaceHolder_gvCertificates"
            )

            # Get the HTML content of the table
            pending_transfers_html = pending_transfers_element.get_attribute(
                "outerHTML"
            )

            # Use Pandas to read HTML and convert it to a DataFrame
            pending_transfers = pd.read_html(StringIO(pending_transfers_html))[0]
            logger.debug(pending_transfers.head())

            def this_station(
                frame_row,
            ):  # check pending transfers are for selected station
                return frame_row["Generator"] == station_name

            pending_transfers_this_station = pending_transfers[
                pending_transfers.apply(this_station, axis=1)
            ]
            if not (pending_transfers_this_station.empty):
                pending_transfers_this_station.loc[:, "Output Period"] = pd.to_datetime(
                    pending_transfers_this_station["Output Period"], format="%b %Y"
                )

                if cert == "roc":
                    ROCs_pending = int(
                        pending_transfers_this_station["Certificates"].sum()
                    )
                    ROCs_pending_date = (
                        pending_transfers_this_station["Output Period"]
                        .min()
                        .strftime("%b %Y")
                    )
                    logger.info(
                        f"There are {ROCs_pending} pending {cert.upper()} transfers found for {station_name}"
                    )
                    logger.info(
                        f"The oldest pending {cert.upper()} transfer for {station_name} is from {ROCs_pending_date}"
                    )

                if cert == "rego":
                    REGOs_pending = int(
                        pending_transfers_this_station["Certificates"].sum()
                    )
                    REGOs_pending_date = (
                        pending_transfers_this_station["Output Period"]
                        .min()
                        .strftime("%b %Y")
                    )
                    logger.info(
                        f"There are {REGOs_pending} pending {cert.upper()} transfers found for {station_name}"
                    )
                    logger.info(
                        f"The oldest pending {cert.upper()} transfer for {station_name} is from {REGOs_pending_date}"
                    )
            else:
                raise NoSuchElementException

        except NoSuchElementException:  # if there is no table
            logger.info(f"No {cert.upper()} pending transfers found for {station_name}")

    return ROCs_pending, REGOs_pending, ROCs_pending_date, REGOs_pending_date


def get_oldest_not_issued_dates(
    station_name, username, ROCs_not_issued_date, REGOs_not_issued_date, driver
):
    driver.get(
        "https://renewablesandchp.ofgem.gov.uk/OutputData/ViewOutputHistory.aspx"
    )
    ROCs_not_issued_date = "NA"
    REGOs_not_issued_date = "NA"

    # select generating station
    station_selector = driver.find_element(
        By.ID, "ctl00_ContentPlaceHolder_GeneratorStation1_ddlStation"
    )
    select = Select(station_selector)
    stations = [i.text for i in select.options[1:]]

    logger.debug(stations)

    try:
        found = False  # check if correct generator found
        for option in select.options:
            valid_generator = option.text
            if valid_generator == station_name:
                logger.debug(station_name + " selected")
                # select generator
                value = option.get_attribute("value")
                select.select_by_value(value)
                found = True

        if not (found):
            raise NoSuchElementException

        startDateSelector = driver.find_element(
            By.ID, "ctl00_ContentPlaceHolder_ddlFromDate"
        )
        select = Select(startDateSelector)

        def get_ROC_date():
            current_date = datetime.now()
            # Compare the month and day with September 1st
            if current_date.strftime("%m-%d") >= "09-01":
                return "Apr " + str(current_date.year - 1)
            else:
                # If the date is before September 1st, return the previous year
                return "Apr " + str(current_date.year - 2)

        def get_REGO_date():
            current_date = datetime.now()
            # Compare the month and day with August 1st
            if current_date.strftime("%m-%d") >= "08-01":
                return "Apr " + str(current_date.year)
            else:
                # If the date is before August 1st, return the previous year
                return "Apr " + str(current_date.year - 1)

        select.select_by_visible_text(
            get_ROC_date()
        )  # select last viable issue date for rocs

        # apply filter
        applyButton = driver.find_element(
            By.ID, "ctl00_ContentPlaceHolder_btnFilterResults"
        )
        applyButton.click()

        try:
            output_history_element = driver.find_element(
                By.ID, "ctl00_ContentPlaceHolder_dgOutputHistory"
            )

            # Get the HTML content of the table
            output_history_html = output_history_element.get_attribute("outerHTML")

            # Use Pandas to read HTML and convert it to a DataFrame
            output_history = pd.read_html(StringIO(output_history_html))[0]
            logger.debug(output_history.head())

            def ROCs_not_issued(frame_row):  # set conditions for ROCs not issued
                return not (
                    any(
                        group == "Issued"
                        for group in re.findall(r"RO\(([^)]+)\)", frame_row["Scheme"])
                    )
                    or frame_row["Total Eligible Output"] == 0
                )

            def REGOs_not_issued(frame_row):  # set conditions for REGOs not issued
                return not (
                    any(
                        group == "Issued"
                        for group in re.findall(r"REGO\(([^)]+)\)", frame_row["Scheme"])
                    )
                    or frame_row["Total Eligible Output"] == 0
                )

            try:
                ROCs_not_issued_index = output_history[
                    output_history.apply(ROCs_not_issued, axis=1)
                ].index[-1]
                ROCs_not_issued_date = pd.to_datetime(
                    output_history.at[ROCs_not_issued_index, "Period start date"],
                    dayfirst=True,
                ).strftime("%b %Y")
                logger.info(
                    f"{station_name} oldest ROCs not issued for Output Period {ROCs_not_issued_date}"
                )
            except IndexError:
                logger.info(f"{station_name} has no ROCs not issued")
                ROCs_not_issued_date = "NA"

            # reset date range for REGO expiry

            startDateSelector = driver.find_element(
                By.ID, "ctl00_ContentPlaceHolder_ddlFromDate"
            )
            select = Select(startDateSelector)

            select.select_by_visible_text(
                get_REGO_date()
            )  # select last viable issue date for regos

            # apply filter
            applyButton = driver.find_element(
                By.ID, "ctl00_ContentPlaceHolder_btnFilterResults"
            )
            applyButton.click()

            output_history_element = driver.find_element(
                By.ID, "ctl00_ContentPlaceHolder_dgOutputHistory"
            )

            # Get the HTML content of the table
            output_history_html = output_history_element.get_attribute("outerHTML")

            # Use Pandas to read HTML and convert it to a DataFrame
            output_history = pd.read_html(StringIO(output_history_html))[0]
            logger.debug(output_history.head())

            try:
                REGOs_not_issued_index = output_history[
                    output_history.apply(REGOs_not_issued, axis=1)
                ].index[-1]
                REGOs_not_issued_date = pd.to_datetime(
                    output_history.at[REGOs_not_issued_index, "Period start date"],
                    dayfirst=True,
                ).strftime("%b %Y")
                logger.info(
                    f"{station_name} oldest REGOs not issued for Output Period {REGOs_not_issued_date}"
                )
            except IndexError:
                logger.info(f"{station_name} has no REGOs not issued")
                REGOs_not_issued_date = "NA"

        except NoSuchElementException:  # if there is no table
            logger.info(f"No output history found for {station_name}")

    except NoSuchElementException:
        logger.warning(f"{station_name} not found on account {username}")

    return ROCs_not_issued_date, REGOs_not_issued_date


class Input:
    def __init__(self, text):
        self.text = text

    def enter(self, id, driver):
        field = driver.find_element(By.ID, id)
        field.send_keys(self.text)


class User:
    def __init__(
        self, title, fname, lname, middle_inital, email, phone, initials, mothers_maiden
    ):
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
        super().__init__(
            f"{certificateType} is not a valid certificate. Please enter 'ROC' or 'REGO'."
        )


if __name__ == "__main__":
    (
        stationName_col,
        userpass_col,
        ROC_sup_num_col,
        ROCs_sent_col,
        ROCs_sent_date_col,
        REGO_sup_num_col,
        REGOs_sent_col,
        REGOs_sent_date_col,
        last_login_col,
    ) = gspread_set_RO_transfer_details()

    worksheet, client = gspread_connect_to_sheet(
        "ES Ongoing Support Services", "ROC FiT Mtrs"
    )

    # get data from google sheet
    (
        stationNames,
        usernames,
        passwords,
        last_login_succesful,
        ROC_sup_num,
        ROCs_sent,
        ROCs_sent_date,
        REGO_sup_num,
        REGOs_sent,
        REGOs_sent_date,
        _,
        _,
        _,
        _,
        _,
        _,
    ) = gspread_get_RO_data(
        stationName_col=stationName_col,
        userpass_col=userpass_col,
        ROC_sup_num_col=ROC_sup_num_col,
        ROCs_sent_col=ROCs_sent_col,
        ROCs_sent_date_col=ROCs_sent_date_col,
        REGO_sup_num_col=REGO_sup_num_col,
        REGOs_sent_col=REGOs_sent_col,
        REGOs_sent_date_col=REGOs_sent_date_col,
        last_login_col=last_login_col,
        worksheet=worksheet,
    )

    with bootstrap(local_driver=True, local_logging=True, headless=True) as driver:
        # if True:
        # driver = webdriver.Firefox()
        # driver.implicitly_wait(1)

        for i in range(len(stationNames)):
            logger.info(f"Row in google sheet: {i}")
            try:
                if gspread_getbool(last_login_succesful[i]):
                    RO_login(usernames[i], passwords[i], driver)

                    this_ROCs_sent = transfer_certs(
                        stationNames[i], "ROC", ROC_sup_num[i], passwords[i], driver
                    )
                    if this_ROCs_sent > 0:
                        ROCs_sent[i] = str(this_ROCs_sent)
                        ROCs_sent_date[i] = str(datetime.now().date())
                        gspread_update_ROCs(
                            ROCs_sent_col, ROCs_sent, ROCs_sent_date_col, ROCs_sent_date
                        )

                    this_REGOs_sent = transfer_certs(
                        stationNames[i], "REGO", REGO_sup_num[i], passwords[i], driver
                    )
                    if this_REGOs_sent > 0:
                        REGOs_sent[i] = str(this_REGOs_sent)
                        REGOs_sent_date[i] = str(datetime.now().date())
                        gspread_update_REGOs(
                            REGOs_sent_col,
                            REGOs_sent,
                            REGOs_sent_date_col,
                            REGOs_sent_date,
                        )

                    RO_logout(driver)

                else:
                    logger.warning(f"{usernames[i]} skipped: password incorrect")

            except LoginFailed as exc:
                logger.warning(exc)
                # Make sure username is not retried
                last_login_succesful[i] = False

                # push update to sheet
                worksheet.update(
                    utils.rowcol_to_a1(2, last_login_col)
                    + ":"
                    + utils.rowcol_to_a1(worksheet.row_count, last_login_col),
                    [[i] for i in last_login_succesful],
                )

    logger.info("done")
