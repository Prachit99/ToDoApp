const mongoose = require('./db.js');
const taskController = require('./Controllers/taskController.js')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(3000, () => {
    console.log("Server has started")
});

app.use('/', taskController);

// app.get('/', (req, res) => {
//     res.render('index');
//     console.log('Server is Online!');
// });

