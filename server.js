const express = require('express');// common js
const path = require('path');// common js
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config temple engine
app.set('view', './view')
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
