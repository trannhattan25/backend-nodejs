const connection = require('../config/database');
const User = require('../models/user');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDServices')

let users = [];

const getHomePage = async (req, res) => {
    let results = [];
    // let results = await getAllUsers();
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

    await User.create({
        email: email,
        name: name,
        city: city
    })
    // await User.create({
    //     email,
    //     name,
    //     city
    // })

    // let [results, fields] = await connection.query(
    //     `   INSERT INTO Users(email, name, city)  
    //     VALUES(?, ?, ?)`,
    //     [email, name, city]
    // );

    res.send('Create user success');

}
// edit
const getUpdateUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user })
}
const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body;

    await updateUserById(email, name, city, id);


    res.redirect('/')
}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId);
    res.render('delete.ejs', { userEdit: user })
}
const postHandleDeleteUser = async (req, res) => {
    let { id } = req.body;
    await deleteUserById(id);
    res.redirect('/');
}

module.exports = {
    getHomePage,
    getNhattan,
    getCreateUser,
    postCreateUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser
}