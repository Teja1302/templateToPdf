
const FabricOrder = require('../model/templateModel');
const handlebars = require('handlebars')
const fs = require('fs');
const puppeteer = require('puppeteer');
const path = require('path');
const model =require('../model/templateModel')



async function addFabricOrder(req, res) {
    const fabricOrderData = req.body;
    console.log(fabricOrderData);

    try {
        const newFabricOrder = await FabricOrder.create(fabricOrderData);
        res.status(201).json({ success: true, fabricOrder: newFabricOrder });
    } catch (error) {
        console.error('Error adding fabric order:', error);
        res.status(500).json({ success: false, error: 'Error adding fabric order' });
    }
}

const pdfController = {
    generatePDF: async (req, res) => {
        try {
            // Fetch data from the database
            let data = await FabricOrder.findAll(); // Example: Fetch all records from the database

            // Read the Handlebars template file
            let source = fs.readFileSync(path.join(__dirname, '../../livePp/templates/fabricPO.hbs'));
            console.log(source)

            // Compile the Handlebars template
            let template = handlebars.compile(source.toString());

            let fabricItems = 
                {
                    sNo: 1,
                    fabricName: 'Cotton',
                    fabricCode: 'ABC123',
                    fabricColor: 'White',
                    count: '20s',
                    construction: 'Plain Weave',
                    fdsWidth: '60"',
                    fabricDescription: 'Soft cotton fabric',
                    fabricQuantity: 100,
                    fabricUnitPrice: 5,
                    fabricTotal: 500,
                    totalQuantity: 1000,
                    totalQuantiyInYards: 1093.61,
                    subtotal: 5000,
                    moqCharges: 0,
                    freightCharges: 50,
                    igstPercent: 18,
                    igstAmount: 90,
                    price: 5090,
                    totalAmountInWords: 'Five thousand ninety dollars',
                    remarksData: 'Additional remarks here',
                
            
        
           
           // let additionalData = {
                PONumber: '12345',
                updatedAt: '2024-05-10',
                deliveryDate: '2024-05-20',
                orderRef: 'REF123',
                styleNo: 'STYLE001',
                season: 'Summer',
                millPerformanceNo: 'PROFORMA123',
                createdByUser: 'John Doe',
                updatedByUser: 'Jane Smith',
                currency: 'USD',
                }
            let mergedData = Object.assign({}, fabricItems);
            let html = template(mergedData);
           
            let browser = await puppeteer.launch();
            let page = await browser.newPage();
            await page.setContent(html.toString());
            let pdfBuffer = await page.pdf({ format: 'A4' });
           // console.log(pdfBuffer)
            await browser.close();
            // Send the PDF as a response
            const pdfName = 'generated_pdf.pdf'; // Example PDF file name
            res.contentType('application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="${pdfName}"`);
            res.send(pdfBuffer);
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
    }
};


module.exports = { addFabricOrder, pdfController };



