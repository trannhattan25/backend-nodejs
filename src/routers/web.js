const express = require('express');
const { getHomePage, getNhattan, postCreateUser, getCreateUser } = require('../controllers/homeController')
const route = express.Router();

route.get('/', getHomePage);
route.get('/nhattan', getNhattan);
route.get('/create-user', getCreateUser);
route.post('/create-user', postCreateUser);



module.exports = route; // export defaulf