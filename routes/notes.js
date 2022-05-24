var express = require('express');
const { connect } = require('.');
var router = express.Router();
var connection  = require('../lib/db');


router.get('/notes', (res, req, next) => {
        res.render('',
        {
            page_title: "Notes"
        })
})





router.get('/notes/display/:id', function(req, res, next) {
      
    connection.query('SELECT  projects.proj_title, projects.proj_desc, notes.note, notes.active_dt FROM  projectapp1.projects, projectapp1.notes WHERE projects.id = project_id AND projects.id = '  +  req.params.id + ' ORDER by active_dt',function(err, rows, fields)     {
   
           if(err){
               //req.flash('error', err); 
               res.render('notes-display',
               {
                   page_title: "Notes List",
                   data: ''
               });   
           }else{
               
               res.render('notes-display',
               {
                   page_title: "Notes List",
                   data: rows
                   
               });
           }                          
            });
       });


    //    router.get('/notes/edit/:id/', function(req, res, next) {
      
    //     connection.query('SELECT * FROM projectapp1.projects, projectapp1.notes WHERE notes.id='+ req.params.id, function(err,row)     {
        
    //            if(err){
    //                //req.flash('error', err); 
    //                res.render('notes-edit',
    //                {
    //                    page_title: "Project Edit",
    //                    project: ''
    //                });   
    //            }else{
                   
    //             res.render('notes-edit',
    //             {
    //                     page_title: "Project Edit",
    //                     project: row
    //                });
    //            }
                                   
    //             });
               
    //        });

    //                 // THIS MSHOULD UPDATE THE NOTES
    //    router.post('/notes/update', function(req, res, next) {
      
    //     let sqlQuery = "UPDATE projectapp1.notes SET note ='" + req.body.notes + 
    //                                          "', project_id ='" +  req.body.project_id + 
    //                                         "', active_date ='" +  req.body.active_date + 
    //                                         "' WHERE projects.id = " + req.body.id;
    
    //     connection.query(sqlQuery, function(err,rows)     {
        
    //                //req.flash('error', err); 
    //                res.redirect('/notes/display/:id');   
    //                next();                
    //             });
               
    //        });


    router.get('/notes/create', (req, res, next) => {
        connection.query('SELECT * FROM projectapp1.projects  ',function(err, rows, fields)     {
            
            

        res.render('../views/note-add.ejs',
        {
            page_title: "Project Creation",
            project: rows
        });
    })

    router.post('/notes/add', function(req, res, next) {


        
            let noteadd = {
  
            
          project_id :  req.body.id ,
          notes : req.body.notes ,
          active_dt :  req.body.active_dt ,
        //   proj_due_dt : req.body.end_date 
          
          }
        
        let sqlQuery = "INSERT INTO notes.projects SET ?"
  
        
        
    
        let vQuery = connection.query(sqlQuery, noteadd,(err, results) =>  {
        
          if(err) throw err;
          // res.send(JSONResponse(results));
          
          
         
        });
        res.redirect('//notes/display/:id');   
        next();  
            });
        }); 



module.exports = router;