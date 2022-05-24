var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const body_parser = require('body-parser')
var connection  = require('../lib/db');
var http = require('http');

router = express.Router();
router.use(body_parser.json());




router.post('/login', function (req, res, next) {


  var email = req.body.email;
  var password = req.body.password;
  



  connection.query('SELECT * FROM librarians WHERE email = ?', [email], function (err, rows, fields) {
      bcrypt.compare( password,  rows[0].password,  (err, same) => {
          console.log(rows[0].password)
          if (err) throw err
          console.log(err + "error");
          console.log(rows.length);
         
          if (rows.length <= 0) {
              res.redirect("/webpage/login");
          } else if (same) {
              req.session.adminloggedin = true;
              console.log(same);
              req.session.username = rows[0].username;
              res.redirect('/');
          }

      });
  });
})
// Skip to login page
router.get('/api/login', (req, res, next) => {
  if (req.session.adminloggedin === true) {
      res.redirect('/Librarian display page',);


  } else {
      res.render('../views/login.ejs',
          {

              page_title: "Admin Login",
              username: '',
              password: ''
          })

  }

});


router.post("/request", (req, res) => {
   req.body.student_id
   req.body.book_id
  database.query(`INSERT INTO requests (student_id, book_id, date_requested) VALUES ( ${req.body.student_id}, ${req.body.book_id}, '${new Date().toISOString().slice(0, 10)}')`, (err, rows) => {
      if (err) throw err
      else {
          
      }
  });
});


router.get("/api/requests", (req, res) => {
  database.query("SELECT * FROM requests", (err, rows) => {
      if (err) throw err
      else {
          res.status(200).send(rows);
      }
  });
});

router.get('/webpage/stubooks', function(req, res, next) {
      
 connection.query('SELECT * FROM libraryapp4.books ORDER by  id',function(err, rows, fields)     {

        if(err){
            
            res.render('../views/bookdisplay.ejs',
            {
                page_title: "Books Display",
                data: ''
            });   
        }else{
            
            res.render('../views/bookdisplay.ejs',
            {
                page_title: "Books Display",
                data: rows
            });
        }                          
         });
    });

router.put("/request/approval", (req, res) => {
  // req.body.id
  let now = new Date();
  database.query(`UPDATE requests (approved, date_due) SET ( 1, ${now.setDate( now.getDate() + 14 )}) WHERE id = ${req.body.id}`, (err, rows) => {
      if (err) throw err
      else {
          res.status(200).send(true);
      }
  });
});

router.put("/request/disapproval", (req, res) => {
  // req.body.id
  let now = new Date();
  database.query(`UPDATE requests (approved, date_due) SET ( 0, null) WHERE id = ${req.body.id}`, (err, rows) => {
      if (err) throw err
      else {
          res.status(200).send(true);
      }
  });
});
  
module.exports = router;

