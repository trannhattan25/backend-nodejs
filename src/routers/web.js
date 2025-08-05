const express = require('express');
const { getHomePage, getNhattan } = require('../controllers/homeController')
const route = express.Router();

route.get('/', getHomePage);
route.get('/nhattan', getNhattan);

module.exports = route; // export defaulf