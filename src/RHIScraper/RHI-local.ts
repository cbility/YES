require("dotenv").config();
import puppeteer from "puppeteer";
import main from "./main/main.js";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";

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
    // const allLoginRecords: ExistingRecord[] = await getAllRecords(loginsTable.id);

    // const inputs: LoginInput[] = allLoginRecords.map((record) => ({
    //     loginID: record.id,
    //}));

    // eslint-disable-next-line max-len
    const body = JSON.parse("[{\"loginID\":\"66a790491e7c811e8ba54f8a\"}]");
    // eslint-disable-next-line max-len
    //,{\"loginID\":\"66aa4b9347dc90578fc2a748\"},{\"loginID\":\"66aa4ba6b46e1cd11fc29370\"},{\"loginID\":\"65e37da7f8428f036fd9978f\"},{\"loginID\":\"65e37da7f8428f036fd99792\"},{\"loginID\":\"65e37da7f8428f036fd99794\"},{\"loginID\":\"65e37da7f8428f036fd997c1\"},{\"loginID\":\"65e37da7f8428f036fd997d3\"},{\"loginID\":\"65e37da7f8428f036fd997d5\"},{\"loginID\":\"65e37da7f8428f036fd997d9\"},{\"loginID\":\"65e37da7f8428f036fd997fc\"},{\"loginID\":\"65e37da7f8428f036fd9980b\"},{\"loginID\":\"65e37da7f8428f036fd9980f\"},{\"loginID\":\"65e37da7f8428f036fd99871\"},{\"loginID\":\"65e37da7f8428f036fd9987f\"},{\"loginID\":\"65e37da7f8428f036fd9990e\"},{\"loginID\":\"65e37da7f8428f036fd99914\"},{\"loginID\":\"65e37da7f8428f036fd9991a\"},{\"loginID\":\"65e37da7f8428f036fd9991b\"},{\"loginID\":\"65e37da7f8428f036fd99927\"},{\"loginID\":\"65e37da7f8428f036fd99956\"},{\"loginID\":\"65e37da7f8428f036fd999e4\"},{\"loginID\":\"65e37da7f8428f036fd999e9\"},{\"loginID\":\"65e37da7f8428f036fd999ea\"},{\"loginID\":\"65e37da7f8428f036fd999ec\"},{\"loginID\":\"65e37da7f8428f036fd999ee\"},{\"loginID\":\"65e37da7f8428f036fd999f0\"},{\"loginID\":\"65e37da7f8428f036fd99a2f\"},{\"loginID\":\"65e37da7f8428f036fd99b69\"},{\"loginID\":\"65e37da7f8428f036fd99b7a\"},{\"loginID\":\"65e37da7f8428f036fd99c02\"},{\"loginID\":\"65e37da7f8428f036fd99c30\"},{\"loginID\":\"65e37da7f8428f036fd99c31\"},{\"loginID\":\"65e37da7f8428f036fd99965\"},{\"loginID\":\"65e37da7f8428f036fd99991\"},{\"loginID\":\"65e37da7f8428f036fd99992\"},{\"loginID\":\"65e37da7f8428f036fd99993\"},{\"loginID\":\"65e37da7f8428f036fd9999a\"},{\"loginID\":\"66951b781728eb4178eb7626\"},{\"loginID\":\"65e37da7f8428f036fd999ad\"},{\"loginID\":\"65e37da7f8428f036fd999af\"},{\"loginID\":\"65e37da7f8428f036fd999b1\"},{\"loginID\":\"65e37da7f8428f036fd999ba\"},{\"loginID\":\"65e37da7f8428f036fd999bd\"},{\"loginID\":\"65e37da7f8428f036fd999c1\"},{\"loginID\":\"65e37da7f8428f036fd999c2\"},{\"loginID\":\"65e37da7f8428f036fd999ca\"},{\"loginID\":\"65e37da7f8428f036fd999d1\"},{\"loginID\":\"65e37da7f8428f036fd999d8\"},{\"loginID\":\"65e37da7f8428f036fd999db\"}]");

    await main(body,
        puppeteer as unknown as PuppeteerCoreNode,
        browserArgs,
        false);
    return;
    /* */

    /*
    async function updateLogins(step: number, index: number = 0) {
        if (inputs.length - step > index) {
            console.log(`index ${index}`);
            await main(inputs.slice(index, index + step),
                puppeteer as unknown as PuppeteerCoreNode,
                browserArgs,
                1,
                true);
            updateLogins(step, index + step);
        } else {
            await main(inputs.slice(index), puppeteer as unknown as PuppeteerCoreNode, browserArgs, 1, true);
        }
    }

    updateLogins(50, 50);
    */
})();
