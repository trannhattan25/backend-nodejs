const connection = require('../config/database');


let users = [];

const getHomePage = (req, res) => {
    return res.render('home.ejs');

}
const getNhattan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getNhattan
}