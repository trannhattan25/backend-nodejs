const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDServices')

let users = [];

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });

}
const getNhattan = (req, res) => {
    res.render('sample.ejs')
}
const getCreateUser = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;


    let [results, fields] = await connection.query(
        `   INSERT INTO Users(email, name, city)  
        VALUES(?, ?, ?)`,
        [email, name, city]
    );
    console.log(">>>Check results: ", results);

    res.send('Create user success');

}
// edit
const getUpdateUser = (req, res) => {
    res.render('edit.ejs')
}

module.exports = {
    getHomePage,
    getNhattan,
    getCreateUser,
    postCreateUser,
    getUpdateUser
}