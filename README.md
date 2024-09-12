# YES
Code for automating processes within YES (Your Energy Source)

## Local Developer Environment Setup with Node and npm

This guide explains how to set up a local development environment using Node.js and npm. This will allow code to be tested locally before deployment to the cloud. 

Cloud deployment is managed by pushing to the main branch of https://github.com/cbility/YES.

### Project Structure

Here's the structure of this project:
```
.
├── package.json # define dependencies needed for production (excluding RHI Scraper production) and development
├── package-lock.json
├── tsconfig.json #  main project typescript configuration
├── packages
│ ├── Common # contains code used by all packages
│ ├── SmartSuite # contains code defining SmartSuite API interactions
│ ├── QuickFile # contains code defining QuickFile API interactions
│ └── RHIScraper # contains code automating a browser that retrieves information from the RHI register and updates SmartSuite
│ │ ├── package.json # define RHI scraper dependencies
│ │ ├── tsconfig.json # individual package typescript configuration
│ │ ├── tsconfig.prod.json # individual package production typescript configuration
│ │ └── src # source code files
│ └── Main # contains code that uses several other packages
│ │ ├── tsconfig.json # individual package typescript configuration
│ │ ├── OfgemCheck # used in an AWS step function that updates the YES RHI database 
│ │ ├── QuickFileWebhookHandler # handles webhooks from the QuickFile financial platform
│ │ └── tests # tests for main code
│ └── Ply # contains code used in code blocks on the low-code platform https://ply.io
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

    Navigate to the project root directory
    ```shell
        cd /path/to/project
    ```
    Install dependencies
    ```shell
        npm install
    ```

3. Add local environment variables
    create file named '.env' in project root containing API keys to be used in development
    ```.env
        TECHNICAL_SMARTSUITE_KEY=Development SmartSuite API Key
        QUICKFILE_API_KEY=QuickFile API key
    ```

4. Run tests locally

    Compile project for dev environment
    ```shell
        tsc -b
    ```
    run a test:
    ```shell
        node 'packages\main\tests\OfgemCheck\checkOutput.test.js'
    ```

    test the RHI scraper:
    ```shell
        tsc -b
        npm run start --prefix packages/RHIScraper
    ```
    You can control what is tested (and whether the browser runs headless or not) via the src/RHIScraper/RHI-local.ts file
