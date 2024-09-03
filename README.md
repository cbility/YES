# YES
Code for automating processes within YES (Your Energy Source)

# Local Developer Environment Setup with npm and dotenv

This guide explains how to set up a local development environment using npm and dotenv. This will allow code to be dested locally before deployment to the cloud

## Project Structure

Here's the structure of this project:
```
.
├── package.json # define dependencies needed for production and development
├── package-lock.json
├── tsconfig.json # typescript configuration
├── src 
│ └── ofgemCheck # contains code used in an AWS step function that updates the YES RHI database 
│ └── Ply # contains code used in various Ply features. Copied and pasted from the compiled javascript files into Ply
│ └── QuickFile # contains code defining how various scripts interact with the QuickFile API
│ └── tests # for testing functions locally before deployment
│ └── SmartSuite # contains code defining SmartSuite API interactions
│ └── lambda # contains AWS lambda function top level index files
│ └── .eslint.js # defines project linting configuration
├── dist # compiled javascript code for use in production
```

## Prerequisites

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
        tsc
    ```
    run a test:
    ```shell
        node 'dist\tests\opportunityUpdate.js'
    ```
