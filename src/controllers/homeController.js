const connection = require('../config/database');


let users = [];

const getHomePage = (req, res) => {
    return res.render('home.ejs');

}
const getNhattan = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = (req, res) => {
    console.log(">>> req.body", req.body);

    res.send("add new");
}

module.exports = {
    getHomePage,
    getNhattan,
    postCreateUser
}