
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

#Set username and password
username = "Yarrowspower2019"
password = "Bdrejb123"
rhi_number = "RHI0000027491"

#choose web driver
driver = webdriver.Firefox() 
driver.implicitly_wait(10)

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
        raise Exception("INCORRECT PASSWORD FOR " + username +". DO NOT RE-ATTEMPT.")
except NoSuchElementException:
    # Login was successful
    print("Login successful")

#navigate to periodic data page
driver.get("https://rhi.ofgem.gov.uk/PeriodicData/SubmitPeriodicData.aspx")

installation_selector = driver.find_element(By.ID, "FullWidthPlaceholder_FullWidthContentPlaceholder_ddlInstallation")

#Select specific RHI number
select = Select(installation_selector)
options = select.options
#select.select_by_index(3)

for option in options:
    if (option.text[:13] == rhi_number):
        value = option.get_attribute("value")

select.select_by_value(value)

latest_date = driver.find_element(By.ID, "FullWidthPlaceholder_FullWidthContentPlaceholder_gvTimeLines_lblPeriodDates_0")
print(latest_date.text[-11:])

logout_button = driver.find_element(By.ID, "WelcomeAndLogoutPlaceHolder_Button1")
logout_button.click()
confirm_logout_button = driver.find_element(By.ID, "mainPlaceHolder_btnLogout")
confirm_logout_button.click()

#driver.quit()
