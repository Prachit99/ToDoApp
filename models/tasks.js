const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('Task', taskSchema)
module.exports = Task;