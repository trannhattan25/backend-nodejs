const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('Hello World! Nodemon')
})
route.get('/nhattan', (req, res) => {
    res.render('sample.ejs')
})

module.exports = route; // export defaulf