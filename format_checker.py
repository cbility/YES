import gspread
from gspread_formatting import *
import RHI_last_date_scraper as scr
import gspread.utils as utils



worksheet, client = scr.connect_to_sheet('RHI Complex (Working edit)','RHI Meters Complex')

dates_col = 9

#worksheet.format(utils.rowcol_to_a1(2,dates_col) + ':' + 
                    # utils.rowcol_to_a1(worksheet.row_count,dates_col), { "numberFormat": { "type": "DATE","pattern": "d\" \"mmm\" \"yyyy"}})

format = get_user_entered_format(worksheet, "I12")

print(format)