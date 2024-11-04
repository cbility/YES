import logging
from selenium import webdriver


def init_driver_options(headless=True):

    driver_options = webdriver.ChromeOptions()
    if headless:
        driver_options.add_argument("--headless")  # runs without a GUI
    driver_options.add_argument("--no-sandbox")  # runs without a sandbox
    driver_options.add_argument("--disable-extensions")  # runs without extensions

    # remove flag that browser is robotically controlled
    driver_options.add_experimental_option("useAutomationExtension", False)
    driver_options.add_experimental_option("excludeSwitches", ["enable-automation"])

    # removes INFO and WARNING level browser logs
    driver_options.add_argument(
        "--log-level=2"
    )  # INFO = 0, WARNING = 1, LOG_ERROR = 2, LOG_FATAL = 3. Default is 0.

    return driver_options


def bootstrap(
    local_logging: bool,
    local_driver: bool,
    loglevel: logging = logging.INFO,
    headless: bool = True,
):

    driver_options = init_driver_options(headless=headless)

    if local_logging:
        logging.basicConfig(
            level=loglevel, format="%(asctime)s - %(levelname)s - %(message)s"
        )

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
        pd_handler.setFormatter(
            logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
        )
        logger.addHandler(pd_handler)

    if local_driver:  # initialize webdriver
        from selenium.webdriver.chrome.service import Service as ChromeService
        from webdriver_manager.chrome import ChromeDriverManager
        import os

        chrome_driver_path = ChromeDriverManager().install()
        print(f"ChromeDriver installed at: {chrome_driver_path}")

        chromedriver_executable = chrome_driver_path.replace(
            "THIRD_PARTY_NOTICES.chromedriver", "chromedriver.exe"
        )
        print(f"Using ChromeDriver executable at: {chromedriver_executable}")

        os.environ["PATH"] += os.pathsep + os.path.dirname(chromedriver_executable)

        # check if the ChromeDriver is executable
        if not os.path.isfile(chromedriver_executable) or not os.access(
            chromedriver_executable, os.X_OK
        ):
            raise Exception(
                f"ChromeDriver at {chromedriver_executable} is not executable"
            )

        # Initialize WebDriver with the service and options
        chrome_service = ChromeService(chromedriver_executable)
        driver = webdriver.Chrome(service=chrome_service, options=driver_options)
    else:
        driver_options.set_capability(
            "browserless:token", "d3f137ab-54c4-40f1-9b59-26bbb5654800"
        )

        driver = webdriver.Remote(
            command_executor="https://chrome.browserless.io/webdriver",
            options=driver_options,
        )

    return driver
