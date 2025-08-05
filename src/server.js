const express = require('express');// common js
const path = require('path');// common js
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config temple engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config static files
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Hello World! Nodemon')
})
app.get('/nhattan', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
