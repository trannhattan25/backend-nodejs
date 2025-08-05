const connection = require('../config/database');


let users = [];

const getHomePage = (req, res) => {
    return res.render('home.ejs');

}
const getNhattan = (req, res) => {
    res.render('sample.ejs')
}
const getCreateUser = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    // connection.query(
    //     `   INSERT INTO Users(email, name, city)  
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create user success');
    //     }
    // )

    let [results, fields] = await connection.query(
        `   INSERT INTO Users(email, name, city)  
        VALUES(?, ?, ?)`,
        [email, name, city]
    );
    // const [results, fields] = await connection.query(`select * from Users u`);
    console.log(">>>Check results: ", results);

    res.send('Create user success');

}

module.exports = {
    getHomePage,
    getNhattan,
    getCreateUser,
    postCreateUser
}