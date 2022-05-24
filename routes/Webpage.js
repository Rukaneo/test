
var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const body_parser = require('body-parser')
var connection = require('../lib/db');
var http = require('http');
// const { render } = require('../app');

//This is Base rendering folder

/* default page */
router.get('/', function (req, res, next) {
    res.render('index', {

        page_title: 'Express'
    });
});
// Numbers don't single oqure sfor the '' (bakcticks strings hover do. LIKE DATES)


router.get('/webpage/login', (req, res, next) => {

    res.render('../views/login.ejs', {

        email: '',
        password: ''
    })
});


router.get('/webpage/display', (req, res, next) => {
    res.render('../views/libdisplay.ejs', {


        page_title: 'Requests'
    })

});

// router.get('/webpage/request', (req, res, next) => {

//     res.render('../views/Stud_req.ejs', {

//             page_title: 'Student  Library'
//             data: req
//     })
// });
    



  module.exports = router;