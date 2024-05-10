const router = require('express').Router()
const { addFabricOrder,pdfController } = require('../controller/templateController');

router.post('/fabricorders', addFabricOrder);
router.get('/generate-pdf', pdfController.generatePDF);

module.exports = router;
