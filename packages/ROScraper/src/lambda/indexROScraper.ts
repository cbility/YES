import main from "../main/main.js"
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";

chromium.setHeadlessMode = true;
chromium.setGraphicsMode = false;

export async function handler(event: { body: string }, lambdaContext?: { logStreamName: string }) {

    console.log("EVENT: \n" + JSON.stringify(event, null, 2));

    const inputs = JSON.parse(event.body);

    try {
        await main(inputs, puppeteer, {
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(
                "https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar",
            ),
            headless: chromium.headless,
        }, lambdaContext);

        const response = {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: "Update Complete" })
        };
        return response;

    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        console.log(err);

        const errorResponse = {
            statusCode: err?.status ?? 500, // Use the status code from the error if available
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ error: err?.message ?? "An error occurred" })
        };
        return errorResponse;
    }
}