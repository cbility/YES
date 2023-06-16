import RHI_last_date_scraper as scraper

from oauth2client.service_account import ServiceAccountCredentials
import gspread
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException


worksheet, client = scraper.connect_to_sheet('RHI Complex (Working edit)','RHI Meters Complex')

rhis, usernames, passwords, last_login_succesful, old_dates = scraper.get_logins(15,3,47,9,worksheet)

rhi_users = []
for [username,indices] in scraper.condense_list_with_indices(usernames):
    rhi_users.append([username, passwords[indices[0]], [rhis[i] for i in indices], indices])

#print(rhi_users)


driver = webdriver.Firefox() 
driver.implicitly_wait(10)
print(scraper.get_last_submission_date(['OmegaProteins1','Omega1000', ['RHI0000026049']], driver))