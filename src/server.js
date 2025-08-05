require('dotenv').config()

const express = require('express');// common js
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routers/web');

//GET THE CLIENT
const mysql = require('mysql2')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


// config temple engine
configViewEngine(app);

//khai bao route
app.use('/', webRoute)

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // default: 3306
    user: 'root',
    password: '123456',// default : empty
    database: 'hoidanit',
});
// A simple SELECT query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>> result: ", results); // results contains rows returned by server
        console.log(">>> fields: ", fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
