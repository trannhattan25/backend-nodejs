require('dotenv').config()

const express = require('express');// common js
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routers/web');
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


// config temple engine
configViewEngine(app);

//khai bao route
app.use('/', webRoute)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
