const connection = require('../config/database');


let users = [];

const getHomePage = (req, res) => {
    return res.render('home.ejs');

}
const getNhattan = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = (req, res) => {

    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;

    let { email, name, city } = req.body;
    console.log(">>> req.body", req.body.email);
    connection.query(
        `   INSERT INTO Users(email, name, city)  
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Create user success');
        }
    )

}

module.exports = {
    getHomePage,
    getNhattan,
    postCreateUser
}