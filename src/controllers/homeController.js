const getHomePage = (req, res) => {
    //procss data
    // call model
    res.send('Hello World! Nodemon')

}
const getNhattan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getNhattan
}