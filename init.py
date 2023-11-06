import logging
from selenium import webdriver

def init_driver_options(headless=True):

    driver_options = webdriver.ChromeOptions()
    if headless:
        driver_options.add_argument('--headless') # runs without a GUI
    driver_options.add_argument('--no-sandbox') # runs without a sandbox

    # remove flag that browser is robotically controlled
    driver_options.add_experimental_option("useAutomationExtension", False)
    driver_options.add_experimental_option("excludeSwitches", ['enable-automation'])

    #removes INFO and WARNING level browser logs
    driver_options.add_argument('--log-level=2')  # INFO = 0, WARNING = 1, LOG_ERROR = 2, LOG_FATAL = 3. Default is 0.

    return driver_options


def bootstrap(local_logging:bool, local_driver:bool, loglevel:logging=logging.INFO, headless:bool=True):

    driver_options = init_driver_options(headless=headless)

    if local_logging:
        logging.basicConfig(level=loglevel, format='%(asctime)s - %(levelname)s - %(message)s')

    else:
        import requests

        # Configure logging system for Pipedream

        class PipedreamHandler(logging.Handler):
            def __init__(self, url):
                super().__init__()
                self.url = url

            def emit(self, record):
                data = self.format(record)
                requests.post(self.url, json=data)

        logger = logging.getLogger()
        logger.setLevel(loglevel)

        pd_handler = PipedreamHandler("https://your-pipedream-url")
        pd_handler.setFormatter(logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s"))
        logger.addHandler(pd_handler)   

    if local_driver:  #initialize webdriver
        from selenium.webdriver.chrome.service import Service as ChromeService
        from webdriver_manager.chrome import ChromeDriverManager    
        
        driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=driver_options)
    else:
        driver_options.set_capability('browserless:token', "d3f137ab-54c4-40f1-9b59-26bbb5654800")

        driver = webdriver.Remote(
            command_executor='https://chrome.browserless.io/webdriver',
            options=driver_options)

    return driver

