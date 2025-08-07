require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');// common js
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routers/web');
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config temple engine
configViewEngine(app);

//khai bao route
app.use('/', webRoute);

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Nhan Tan cat' });
cat.save();

(async () => {
    try {
        await connection(); // kết nối DB
        app.listen(port, () => {
            console.log(`✅ Server is listening on http://${hostname}:${port}`);
        });
    } catch (error) {
        console.error("❌ Lỗi kết nối database:", error);
    }
})();
