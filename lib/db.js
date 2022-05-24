var mysql = require(('mysql'))
var host1 = process.env.DB_HOST;
var user1 = process.env.DB_USER;
var database1 = process.env.DB_DATABASE;
var password1 = process.env.DB_PASSWORD;
var http = require('http');

// require('dotenv').config ({path: '../.env'}) // This the dotenv for .nv
// console.log(process.env.DB_HOST)
var conn = mysql.createConnection({

    host:       'localhost',
    user:       'root',
    database:    'libraryapp4',
    password:    'password'

});

conn.connect((err, res) => {
if(!err)
     console.log('Connected to database successfully');
    
    else
    console.log('Connection Failed' + JSON.stringify(err,undefined,2));


});



module.exports = conn;