# YES
Code for automating processes within YES (Your Energy Source)

## Local Developer Environment Setup with Node and npm

This guide explains how to set up a local development environment using Node.js and npm. This will allow code to be tested locally before deployment to the cloud. 

Cloud deployment is managed by pushing to the main branch of https://github.com/cbility/YES.

### Project Structure

Here's the structure of this project:
```
.
├── package.json # define dependencies needed for production and development common to all packages
├── package-lock.json
├── tsconfig.json #  main project typescript configuration
├── packages
│ ├── Common # contains code used by all packages
│ ├── SmartSuite # contains code defining SmartSuite API interactions
│ ├── QuickFile # contains code defining QuickFile API interactions
│ ├── RHIScraper # contains code automating a browser that retrieves information from the RHI register and updates SmartSuite
│ │ ├── package.json # define RHI scraper dependencies
│ │ ├── tsconfig.json # individual package typescript configuration
│ │ ├── tsconfig.prod.json # individual package production typescript configuration
│ │ └── src # source code files
| ├── ROScraper # contains code automating a browser that retrieves information from the Renewables and CHP register and updates SmartSuite
│ ├── Main # contains code that uses several other packages
│ │ ├── tsconfig.json # individual package typescript configuration
│ │ ├── OfgemCheck # used in an AWS step function that updates the YES RHI database 
│ │ ├── QuickFileWebhookHandler # handles webhooks from the QuickFile financial platform
│ │ └── tests # tests for main code
│ ├── Ply # contains code used in code blocks on the low-code platform https://ply.io
│ └──EDCScraper # code defining a scraper tool for grabbing data for the RHI portal and exporting as a xlsx file
├── .eslint.js # defines project linting configuration
├── .github 
│ └── workflows # contains workflow files for automatic cloud deployment of AWS Lambda functions
```

### Prerequisites

- `Node.js` 20.11.1 or later installed
- `npm` installed (to manage dependencies)

### Set Up `Node.js` and `npm`

To see if you already have Node.js and npm installed and check the installed version, run the following commands:

```shell
    node -v
    npm -v
```

1. Install `Node.js` and `npm` according to your system's instructions. See https://nodejs.org/en/download/package-manager
For example, on windows, you can use fnm:
   ```powershell
   # installs fnm (Fast Node Manager)
    winget install Schniz.fnm

    # configure fnm environment
    fnm env --use-on-cd | Out-String | Invoke-Expression

    # download and install Node.js
    fnm use --install-if-missing 20

    # verifies the right Node.js version is in the environment
    node -v # should print `v20.xx.x`

    # verifies the right npm version is in the environment
    npm -v # should print `xx.x.x`
   ```

2. Install local development dependencies

    Navigate to the project root directory if not already there
    ```shell
        cd /path/to/project/
    ```
    Install dependencies
    ```shell
        npm run install-all
    ```

3. Add local environment variables
    if not existing, create file named '.env' in project root containing API keys to be used in development
    ```.env
        TECHNICAL_SMARTSUITE_KEY=Development SmartSuite API Key
        QUICKFILE_API_KEY=QuickFile API key
    ```

### Run local tests and tasks

1. Run a test

    Compile project for dev environment
    ```shell
        npx tsc -b
    ```
    run a test, e.g. :
    ```shell
        node 'packages\Main\dist\tests\OfgemCheck\checkOutput.test.js'
    ```
    or 
     ```shell
        node 'packages\Main\dist\tests\QFWebhookHandler\webhookHandler.test.js'
    ```

2. Test the RHI Scraper
    ```shell
        npx tsc -b
        npm run start --prefix packages/RHIScraper
    ```
    You can control what is tested (and whether the browser runs headless or not) via the src/RHIScraper/RHI-local.ts file. The RO scraper is tested similarly.

3. Bundle Ply code for pasting into code blocks

    Code in the `Ply` package is for use in code blocks in the low-code platform ply.io. Code pasted into these code blocks cannot have any imports or dependencies. Use rollup to package all dependencies into a single file before updating a code block. 
    
    Other code that is included in the file for testing purposes and should not be included in the Ply code block is highlighted with comment sections.

    Navigate to Ply package, compile and bundle code using rollup
     ```shell
        cd packages/Ply
        npx tsc -b
        npx rollup -c
    ```
    \
    Bundled scripts can be found in the Ply/rollup directory.
    \
    \
    Note that there is a limit on how many lines of code can be included in a Ply code block. Because of this limit it is a good idea to only import the tables that are required from the SmartSuite database. If the limit is exceeded then redundant definitions can be removed from the rolled up package to reduce the length of the script.

4. Compile EDC Scraper into .exe file

    In order to update the EDC scraper the program must be recompiled and placed in the correct directory.

    Compile scraper
     ```shell
        cd packages/EDCScraper
        npm install
        npx puppeteer browsers install
        npx tsc 
        npx nexe dist/main.js --build --loglevel verbose --output RHIMeterReadingDownload.exe
    ```
    \
    The contents of the `packages/EDCScraper` directory should then be placed in the `C:\Dropbox\Energy Source (1) (1)\3) Meter reading service & EDC\RHI Meter Reading Download` directory.
