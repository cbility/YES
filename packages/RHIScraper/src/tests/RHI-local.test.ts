import puppeteer from "puppeteer";
import main from "../main/main.js";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";
import SmartSuite from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import { loginsTable } from "../../../SmartSuite/dist/tables.js";
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";

bootstrapEnvironment();

const browserArgs = {
    headless: "new", //using new headless mode, set to false to disable headless
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

    const COMPLETE_UPDATE = true;

    if (COMPLETE_UPDATE) {
        if (process.env.NODE_ENV !== "production") { //set environment variables using local .env
            bootstrapEnvironment();
        }

        const ss = new SmartSuite("s5ch1upc", process.env.TECHNICAL_SMARTSUITE_KEY as string);
        const allLoginRecords: SmartSuiteRecord[] = await ss.getAllRecords(loginsTable.id);

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
        const body = JSON.parse("[{\"loginID\":\"65e37da7f8428f036fd99bd0\"},{\"loginID\":\"65e37da7f8428f036fd9981b\"},{\"loginID\":\"65e37da7f8428f036fd99856\"},{\"loginID\":\"65e37da7f8428f036fd9985b\"},{\"loginID\":\"65e37da7f8428f036fd99876\"},{\"loginID\":\"65e37da7f8428f036fd99890\"},{\"loginID\":\"65e37da7f8428f036fd998a6\"},{\"loginID\":\"65e37da7f8428f036fd998aa\"},{\"loginID\":\"65e37da7f8428f036fd99921\"},{\"loginID\":\"65e37da7f8428f036fd99979\"},{\"loginID\":\"65e37da7f8428f036fd999c3\"},{\"loginID\":\"65e37da7f8428f036fd99a19\"},{\"loginID\":\"65e37da7f8428f036fd99a1f\"},{\"loginID\":\"65e37da7f8428f036fd99a40\"},{\"loginID\":\"65e37da7f8428f036fd99ac1\"},{\"loginID\":\"65e37da7f8428f036fd99acf\"},{\"loginID\":\"65e37da7f8428f036fd99bea\"},{\"loginID\":\"65e37da7f8428f036fd99bec\"},{\"loginID\":\"66048a2deacc4d19bab05b96\"},{\"loginID\":\"66048a2deacc4d19bab05b97\"},{\"loginID\":\"66048a2deacc4d19bab05b98\"},{\"loginID\":\"66048a2deacc4d19bab05b99\"},{\"loginID\":\"66048a2deacc4d19bab05b9a\"},{\"loginID\":\"66048a2deacc4d19bab05b9b\"},{\"loginID\":\"66048a2deacc4d19bab05b9c\"},{\"loginID\":\"66048a2deacc4d19bab05b9d\"},{\"loginID\":\"66048a2deacc4d19bab05b9e\"},{\"loginID\":\"66048a2deacc4d19bab05b9f\"},{\"loginID\":\"66048a2deacc4d19bab05ba0\"},{\"loginID\":\"66048a2deacc4d19bab05ba2\"},{\"loginID\":\"66048a2deacc4d19bab05ba3\"},{\"loginID\":\"66048a2deacc4d19bab05ba8\"},{\"loginID\":\"66048a2deacc4d19bab05ba9\"},{\"loginID\":\"66048a2deacc4d19bab05bac\"},{\"loginID\":\"66048a2deacc4d19bab05bae\"},{\"loginID\":\"66048a2deacc4d19bab05bb1\"},{\"loginID\":\"66048a2deacc4d19bab05bb2\"},{\"loginID\":\"66048a2deacc4d19bab05bb3\"},{\"loginID\":\"66048a2deacc4d19bab05bb4\"},{\"loginID\":\"66048a2deacc4d19bab05bb5\"},{\"loginID\":\"66048a2deacc4d19bab05bb6\"},{\"loginID\":\"66048a2deacc4d19bab05bb7\"},{\"loginID\":\"66048a2deacc4d19bab05bb8\"},{\"loginID\":\"66048a2deacc4d19bab05bbb\"},{\"loginID\":\"66aa4d60a5815e4e94d5f402\"}]");

        await main(body,
            puppeteer as unknown as PuppeteerCoreNode,
            browserArgs,
            false);
        return;
    }

})();
