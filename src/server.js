require('dotenv').config()

const express = require('express');// common js
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routers/web');
const connection = require('./config/database');
const routeAPI = require('./routers/api');

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
app.use('/v1/api', routeAPI);



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
