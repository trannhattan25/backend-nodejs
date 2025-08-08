const express = require('express');
const { getHomePage } = require('../controllers/homeController');
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI } = require('../controllers/apiController');
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

routeAPI.post('/file', postUploadSingleFileAPI);





module.exports = routeAPI; // export defaulf