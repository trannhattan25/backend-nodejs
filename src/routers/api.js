const express = require('express');
const { getHomePage } = require('../controllers/homeController');
const { getUsersAPI } = require('../controllers/apiController');
const routeAPI = express.Router();

routeAPI.get('/', (req, res) => {
    res.send("hello word with api")
});
routeAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'hello word first api'
    })
});

routeAPI.get('/users', getUsersAPI);




module.exports = routeAPI; // export defaulf