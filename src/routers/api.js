const express = require('express');
const { getHomePage } = require('../controllers/homeController');
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI } = require('../controllers/apiController');
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
routeAPI.post('/users', postCreateUserAPI);
routeAPI.put('/users', putUpdateUserAPI);
routeAPI.delete('/users', deleteUserAPI);




module.exports = routeAPI; // export defaulf