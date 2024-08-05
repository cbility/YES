import SmartSuite from "../SmartSuite/SmartSuiteAPIHandler.js";
//import fetch from "axios";

interface LoginID { loginID: string };

const batchSize = 60;

const lambdaEndpoint = "https://tudk2x9z7h.execute-api.eu-west-2.amazonaws.com/default/YES_Scraper";
const loginsTable = { id: "65e37da7f8428f036fd99785" };
const accountsTable = {
    id: "64d155a9c71c81dc0b41d527",
    fields: {
        "Active Project Count": "s5f94ecc3e",
        "Login ID": "s987febca5",
        "Active Service Count": "sd64357468",
    }
}
const updatesTable = {
    id: "663d3d23a1a0542114b1ac24",
    fields: {
        "Updated Logins": "sb70b9b91a",
        "Date": "sed70935b7",
    }
}
const configurationsTable = {
    id: "663d2313b4e7828a33b1ac07",
    fields: {
        "Last Run": "s3d2ee46fa"
    }
}
const completeUpdateConfigID = "663d4044175c1b3c979a9afd";
const projectUpdateConfigID = "665f350a343198c25eda5fe6";
const serviceUpdateConfigID = "665f353ba173734d1df2211a";

const ss = new SmartSuite("s5ch1upc", "bb7afd0906f8c666a21d15daf1924ff368843cd8");

(async () => {

    // get configuration table in RHI Scraper
    const configurations: Record<string, unknown>[] = await ss.getAllRecords(configurationsTable.id);

    const nextCompleteUpdate = getNextDate(configurations, completeUpdateConfigID);
    const nextProjectUpdate = getNextDate(configurations, projectUpdateConfigID);
    const nextServiceUpdate = getNextDate(configurations, serviceUpdateConfigID);

    const now = new Date();
    let updatedLogins: LoginID[] = [];

    if (nextCompleteUpdate <= now) {
        console.log("Updating all logins")

        const allLogins = await ss.getAllRecords(loginsTable.id);
        const allLoginIDs: LoginID[] = allLogins.map((login: Record<string, unknown>) => ({ loginID: login.id as string }));
        await batchUpdateLogins(allLoginIDs);
        console.log(`Updated ${allLoginIDs.length} logins`);

        //note updated logins
        updatedLogins.push(...allLoginIDs);

        //update configuration record with run date
        ss.updateRecord(configurationsTable.id, completeUpdateConfigID, {
            [configurationsTable.fields["Last Run"]]: now.toISOString()
        })
    } else {

        if (nextProjectUpdate <= now) {
            console.log("Updating project logins")

            const projectLoginIDs = [{ loginID: "65e37da7f8428f036fd99798" }]; //await getRelevantLoginIds(accountsTable.fields["Active Project Count"]);
            const updateSuccess = await batchUpdateLogins(projectLoginIDs);

            if (updateSuccess) {
                console.log(`Updated ${projectLoginIDs.length} project logins`);

                //note updated logins
                updatedLogins.push(...projectLoginIDs);

                //update configuration record with run date
                ss.updateRecord(configurationsTable.id, projectUpdateConfigID, {
                    [configurationsTable.fields["Last Run"]]: now.toISOString()
                })

            } else {
                console.log("Project update failed")
            }
        }

        if (nextServiceUpdate <= now) {
            console.log("Updating service logins")

            const serviceLoginIDs = await getRelevantLoginIds(accountsTable.fields["Active Service Count"]);
            //remove previously checked logins
            const serviceLoginIDsToUpdate = serviceLoginIDs.filter(login => !updatedLogins.includes(login));
            //update service logins
            const updateSuccess = await batchUpdateLogins(serviceLoginIDsToUpdate);

            if (updateSuccess) {
                console.log(`Updated ${serviceLoginIDsToUpdate.length} of ${serviceLoginIDs.length} service logins. The remainder have already been updated`);

                //note updated logins
                updatedLogins.push(...serviceLoginIDs);

                //update configuration record with run date
                ss.updateRecord(configurationsTable.id, serviceUpdateConfigID, {
                    [configurationsTable.fields["Last Run"]]: now.toISOString()
                })

            } else {
                console.log("Service update failed");
            }
        }
    }

    if (updatedLogins.length === 0) {
        console.log('No logins updated');
        return;
    }

    //create update record for updated logins
    const updatedLoginIDs = updatedLogins.map((login) => login.loginID);
    const newUpdate: Record<string, string | string[]> = {
        [updatesTable.fields["Updated Logins"]]: updatedLoginIDs,
        [updatesTable.fields["Date"]]: now.toISOString().slice(0, 10), //remove time from date
    }
    //add record to SS
    ss.bulkAddNewRecords([newUpdate], updatesTable.id);
    console.log("Update record created")

})();


async function getRelevantLoginIds(DeliverableCountSlug: string) {
    const accountsToUpdate = await ss.filterRecords(accountsTable.id, {
        field: DeliverableCountSlug,
        comparison: "is_greater_than",
        value: 0,
    });

    let loginIDs: LoginID[] = accountsToUpdate.map((accountRecord: Record<string, any>) => (
        { loginID: accountRecord[accountsTable.fields["Login ID"]] }
    ));

    return loginIDs;
}
async function batchUpdateLogins(loginIDs: LoginID[]) {

    if (loginIDs.length === 0) return;
    let success = true;

    //split list of loginIDs into manageable chunks for lambda
    let loginIDBatches: LoginID[][] = [];
    while (loginIDBatches.length * batchSize < loginIDs.length) {

        let batch = loginIDs.slice(0, batchSize);
        loginIDBatches.push(batch);
    }

    //update logins in batches
    for (const batch of loginIDBatches) {
        //const controller = new AbortController();
        //set 15 minute timeout for request
        //const timeoutId = setTimeout(() => controller.abort(), 180000)
        try {
            const response = await fetch(lambdaEndpoint, {
                method: 'POST',
                body: JSON.stringify(batch),
                //signal: controller.signal,
            });
            let result = await response.text();
            if (!result.includes("Update Complete")) throw new Error(result);
        } catch (error) {
            console.log('Error updating logins: ' + error);
            success = false;
        } finally {
            //clearTimeout(timeoutId); // Clear timeout if request completes before timeout
        }
    }
    return success;
}

function getNextDate(configurations: Record<string, any>[], id: string) {
    const nextDateFieldSlug = "s8173a46ec"; //next date field in configuration table for scraper
    return new Date(configurations.find((record => record.id === id))?.[nextDateFieldSlug].date as string);
}

