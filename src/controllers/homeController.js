const connection = require('../config/database');


let users = [];

const getHomePage = (req, res) => {

    // A simple SELECT query
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results;

            console.log(">>> result: ", results); // results contains rows returned by server
            console.log(">>> check users", users);

            res.send(JSON.stringify(users))

        }
    );
}
const getNhattan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getNhattan
}