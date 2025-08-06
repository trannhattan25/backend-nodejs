const express = require('express');
const { getHomePage, getNhattan,
    postCreateUser, getCreateUser, getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser } = require('../controllers/homeController')
const route = express.Router();

route.get('/', getHomePage);
route.get('/nhattan', getNhattan);
route.get('/create-user', getCreateUser);
route.post('/create-user', postCreateUser);
route.get('/update/:id', getUpdateUser);
route.post('/update', postUpdateUser);
route.post('/delete/:id', postDeleteUser);
route.post('/delete/', postHandleDeleteUser);



module.exports = route; // export defaulf