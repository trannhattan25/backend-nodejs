const express = require('express');
const { getHomePage, getNhattan,
    postCreateUser, getCreateUser, getUpdateUser } = require('../controllers/homeController')
const route = express.Router();

route.get('/', getHomePage);
route.get('/nhattan', getNhattan);
route.get('/create-user', getCreateUser);
route.post('/create-user', postCreateUser);
route.get('/update/:id', getUpdateUser);



module.exports = route; // export defaulf