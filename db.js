const mongoose = require('mongoose');

const mongoDB = "mongodb://localhost:27017/ToDoApp";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

module.exports = mongoose;