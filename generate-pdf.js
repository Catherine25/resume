import { chromium } from 'playwright';

const browser = await chromium.launch();

const page = await browser.newPage();

await page.goto('http://127.0.0.1:5500', {
    waitUntil: 'networkidle'
});

await page.pdf({
    path: "CV.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
    }
});

await browser.close();