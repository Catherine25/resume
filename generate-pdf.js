import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  const filePath = path.resolve(__dirname, 'index.html'); 
  console.log(`Navigating to local file: file://${filePath}`);
  
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
  
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log('PDF successfully generated!');
})();