const express = require('express');
const mongoose = require('mongoose')
const app = express();


app.use('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
    console.log('Server is Online!');
});

