import puppeteer from "puppeteer";
import main from "../main/main.js";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";
import SmartSuite from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import tables from "../../../SmartSuite/dist/tables.js";
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";

const { RHILoginsTable } = tables;

await bootstrapEnvironment();

const browserArgs = {
    headless: "shell", //using old faster headless mode, set to false to disable headless
    defaultViewport: null,
    args: [
        "--autoplay-policy=user-gesture-required",
        "--disable-backgrounding-occluded-windows",
        "--disable-breakpad",
        "--disable-client-side-phishing-detection",
        "--disable-component-update",
        "--disable-default-apps",
        "--disable-dev-shm-usage",
        "--disable-domain-reliability",
        "--disable-extensions",
        "--disable-features=AudioServiceOutOfProcess",
        "--disable-hang-monitor",
        "--disable-notifications",
        "--disable-offer-store-unmasked-wallet-cards",
        "--disable-popup-blocking",
        "--disable-print-preview",
        "--disable-prompt-on-repost",
        "--disable-renderer-backgrounding",
        "--disable-setuid-sandbox",
        "--disable-speech-api",
        "--disable-sync",
        "--hide-scrollbars",
        "--ignore-gpu-blacklist",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-default-browser-check",
        "--no-first-run",
        "--no-pings",
        "--no-sandbox",
        "--no-zygote",
        "--password-store=basic",
        "--use-gl=swiftshader",
        "--use-mock-keychain",
    ],
};

(async () => {

    const COMPLETE_UPDATE = false;

    if (COMPLETE_UPDATE) {
        if (process.env.NODE_ENV !== "production") { //set environment variables using local .env
            await bootstrapEnvironment();
        }

        const ss = new SmartSuite("s5ch1upc", process.env.TECHNICAL_SMARTSUITE_KEY as string);
        const allLoginRecords = await ss.getAllRecords(RHILoginsTable.id);

        const inputs: { loginID: string }[] = allLoginRecords.map((record) => ({
            loginID: record.id,
        }));

        async function updateLogins(step: number, index: number = 0) {
            if (inputs.length - step > index) {
                console.log(`index ${index}`);
                await main(inputs.slice(index, index + step),
                    puppeteer as unknown as PuppeteerCoreNode,
                    browserArgs);
                updateLogins(step, index + step);
            } else {
                await main(inputs.slice(index), puppeteer as unknown as PuppeteerCoreNode, browserArgs);
            }
        }

        updateLogins(100, 0);
    } else {
        //change inputs here
        const body = JSON.parse("[{\"loginID\":\"65e37da7f8428f036fd99b78\"}]")
        await main(body,
            puppeteer as unknown as PuppeteerCoreNode,
            browserArgs,
            false);
        return;
    }

})();
