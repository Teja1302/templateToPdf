const express =require('express');

const app = express();

require('dotenv').config()
const db = require('./config/dbConfig');

const body = require('body-parser');
app.use(body.json());

const { route } = require('./routes/router');

const { addFabricOrder,pdfController} = require('./controller/templateController');

db.sync({ force: false })
    .then(e => console.log("Table Created"))
    .catch(e => console.log("error", e));

    require('./model/templateModel')


app.use("/get",pdfController.generatePDF)

app.listen(5000,console.log('server connected Sucssesfully'))