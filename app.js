const puppeteer = require('puppeteer');
const fs = require('fs').promises; 

(async function() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Read the HTML content from file
        const htmlContent = await fs.readFile('./templates/fabricPO.html', 'utf-8');

        // Set the HTML content on the page
        await page.setContent(htmlContent);

        // Generate PDF
        await page.pdf({
            path: 'output.pdf',
            format: 'A4',
            printBackground: true 
        });
        
        console.log('Done creating PDF.');
        await browser.close();
    } catch (error) {
        console.error('Error:', error);
    }
})();

