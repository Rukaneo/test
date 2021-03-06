 //Specify the Port to listen on
 const port = process.env.PORT || 8080;

var express = require('express');
var path = require('path');

var createError = require('http-errors');

var flash = require('express-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var mysql = require(('mysql'));

//Setup External Files
var connection  = require('./lib/db');


var projectRouter = require('./routes/project');
var homeRouter = require('./routes/index');
var Basic = require('./routes/Webpage')


var app = express();


 
// Setup the Views Templating Engine
// var express_layout = require("express-ejs-layouts")
// app.use (express_layout)
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');

//  app.set('layout', 'layout/header')


 
 


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));




//  Session Settings
 app.use(cookieParser());
 
 app.use(session({ 
     secret: 'secret code 3245',
     resave: false,
     saveUninitialized: true,
     cookie: { maxAge: 120000 }
 }))
 

 app.use(flash());
 
//  app.use('',  projectRouter);
 app.use('/', homeRouter);
 app.use('/', Basic);

//  app.post("/*", api);
// app.get("/api/*", api);
// app.put("/*", api);
// app.delete("/*", api);
 

 app.listen(port, () => console.log(`Listening on port ${port}..`));

 module.exports = app;