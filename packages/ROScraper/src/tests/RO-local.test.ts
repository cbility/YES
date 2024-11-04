import puppeteer from "puppeteer";
import main from "../main/main.js";
import { PuppeteerNode as PuppeteerCoreNode } from "puppeteer-core";
import SmartSuite from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import tables from "../../../SmartSuite/dist/tables.js";
import bootstrapEnvironment from "../../../Common/dist/bootstrapEnvironment.js";

const { ROLoginsTable } = tables;

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

    const COMPLETE_UPDATE = true;

    if (COMPLETE_UPDATE) {
        if (process.env.NODE_ENV !== "production") { //set environment variables using local .env
            await bootstrapEnvironment();
        }

        const ss = new SmartSuite("s5ch1upc", process.env.TECHNICAL_SMARTSUITE_KEY as string);

        const allLoginRecords = await ss.getAllRecords(ROLoginsTable.id);

        const inputs: { loginID: string }[] = allLoginRecords.map((record) => ({
            loginID: record.id,
        }));

        //cached list of all logins for testing
        /*
        const inputs = [
            {
                loginID: "652ea06e0342963d27025bba",
            },
            {
                loginID: "652ea0a650e1629902e7bb39",
            },
            {
                loginID: "652ef717dbe94c391e85da0d",
            },
            {
                loginID: "665dc17331bc8e3abe24b9ae",
            },
            {
                loginID: "665dc17e1d0fd2550505d447",
            },
            {
                loginID: "665dc186430b68ef15407dda",
            },
            {
                loginID: "665dc1901d0fd2550505d449",
            },
            {
                loginID: "665dc19a2696f1cb810f4152",
            },
            {
                loginID: "665dc1a3809ad558b2154417",
            },
            {
                loginID: "665dc1adfe2c83a8ca15441d",
            },
            {
                loginID: "665dc1b6bd9d1e26acf74889",
            },
            {
                loginID: "665dc1bc13d0eb7a5a0f414c",
            },
            {
                loginID: "665dc1c966db532a1f392f15",
            },
            {
                loginID: "665dc1d100ed01e76225288f",
            },
            {
                loginID: "665dc1ddf7e54f53ea24b9a1",
            },
            {
                loginID: "665dc202a660db52c0f74945",
            },
            {
                loginID: "665dc20a58213e47ad057264",
            },
            {
                loginID: "665dc2142b5653144b05d442",
            },
            {
                loginID: "665dc22a811464142d057329",
            },
            {
                loginID: "665dc23e4818c7f8e70f4140",
            },
            {
                loginID: "665dc2524224f62ecb0f413f",
            },
            {
                loginID: "665dc26009cd8d746b24b998",
            },
            {
                loginID: "665dc265809ad558b2154429",
            },
            {
                loginID: "665dc26bff4967905715441f",
            },
            {
                loginID: "665dc27d9c76bce24205d43c",
            },
            {
                loginID: "665dc285eb5437b272407df2",
            },
            {
                loginID: "665dc28cbdaf31a1070f4141",
            },
            {
                loginID: "665dc299cdb420067ead7a0c",
            },
            {
                loginID: "665dc29d27bab4008b05d43b",
            },
            {
                loginID: "665dc2a7608d6984c124b9b0",
            },
            {
                loginID: "665dc2b57caf1c8bf7252880",
            },
            {
                loginID: "665dc2bbac855b737b057279",
            },
            {
                loginID: "665dc2d06029ab4bdd154418",
            },
            {
                loginID: "665dc2eb8525b0faac392f13",
            },
            {
                loginID: "665dc2f3c67a94d5bc05d43b",
            },
            {
                loginID: "665dc2f95176027f8fad7a07",
            },
            {
                loginID: "665dc30b203cd31393ad7a1c",
            },
            {
                loginID: "665dc3105810459c4e252893",
            },
            {
                loginID: "665dc32e97f085a004252886",
            },
            {
                loginID: "665dc34b31a1521336407de6",
            },
            {
                loginID: "665dc355df07b7218924b9b4",
            },
            {
                loginID: "665dc39ce264bec00d057270",
            },
            {
                loginID: "665dc3aa79690a1c7624b99d",
            },
            {
                loginID: "665dc3b66a7ba9506a154420",
            },
            {
                loginID: "665dc3be341bad9d12407dea",
            },
            {
                loginID: "665dc3ca6a7ba9506a154423",
            },
            {
                loginID: "665dc3d6d27707ca55252886",
            },
            {
                loginID: "665dc3e506edb47eb605d43b",
            },
            {
                loginID: "665dc3efe097d0600a24b9a7",
            },
            {
                loginID: "665dc3f9097530daf9154408",
            },
            {
                loginID: "665dc4378dd1bbc7ba0f4141",
            },
            {
                loginID: "665dc44b2b1989734924b9b0",
            },
            {
                loginID: "665dc456a7afd6d990392f10",
            },
            {
                loginID: "665dc45f486ff00bf5393294",
            },
            {
                loginID: "665dc469efd239770ef74891",
            },
            {
                loginID: "665dc47113760ebc8e392efe",
            },
            {
                loginID: "665dc47a8dd1bbc7ba0f4150",
            },
            {
                loginID: "665dc484a7afd6d990392f16",
            },
            {
                loginID: "665dc48c3c72c48598ad7a20",
            },
            {
                loginID: "665dc495fa6670a725252884",
            },
            {
                loginID: "665dc49d225b92ad32407dd8",
            },
            {
                loginID: "665dc4a6ab0483771a407df2",
            },
            {
                loginID: "665dc4adefd239770ef74895",
            },
            {
                loginID: "665dc4bf1fc28b89abad7a19",
            },
            {
                loginID: "665dc4c70fb0890ce3ad7a16",
            },
            {
                loginID: "665dc4cf8703817608407ddc",
            },
            {
                loginID: "665dc4db04c05bc71c24b997",
            },
            {
                loginID: "665dc4e180f0e3df8c05d42f",
            },
            {
                loginID: "665dc4ea8703817608407dde",
            },
            {
                loginID: "665dc4f3225b92ad32407def",
            },
            {
                loginID: "665dc4fc7629eed4580f4160",
            },
            {
                loginID: "665dc5037629eed4580f4162",
            },
            {
                loginID: "665dc50c04c05bc71c24b999",
            },
            {
                loginID: "665dc529fa6670a725252891",
            },
            {
                loginID: "665dc5303eef91fcfe25287f",
            },
            {
                loginID: "665dc539bb96802d1e24b9a1",
            },
            {
                loginID: "665dc5453eef91fcfe252881",
            },
            {
                loginID: "665dc54904c05bc71c24b99e",
            },
            {
                loginID: "665dc54f8703817608407de2",
            },
            {
                loginID: "665dc559c4dfe02d86252879",
            },
            {
                loginID: "665dc55d505e174b3e057274",
            },
            {
                loginID: "665dc582c4dfe02d86252889",
            },
            {
                loginID: "668fdec7c0fd035278bbccaa",
            },
            {
                loginID: "66a11a5961cdbaefcde07156",
            },
        ]
            */

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

        updateLogins(25, 25);
    } else {
        //change inputs here
        const body = JSON.parse('[{ "loginID": "665dc3105810459c4e252893"}]')
        await main(body,
            puppeteer as unknown as PuppeteerCoreNode,
            browserArgs);
        return;
    }

})();
