const Task = require('./models/tasks')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
app.set('view engine', 'ejs')

const mongoDB = "mongodb://localhost:27017/ToDoApp";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});


const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.listen(3000, () => {
    console.log("Server has started")
});

app.get('/', (req, res) => {
    res.render('index');
    console.log('Server is Online!');
});

