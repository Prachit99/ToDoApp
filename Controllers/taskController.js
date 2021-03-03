const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');


router.get('/', (req, res) => {
    res.render('index');
    console.log('Server is Online!');
});

router.post('/', (req, res) => {

});

module.exports = router;