const { Router } = require('express');
var express = require('express');
const { connect } = require('.');
var router = express.Router();
var connection  = require('../lib/db');







router.get("/request", (req, res) => {
    //req.body.id
    let now = new Date();
    database.query(`UPDATE requests (approved, date_due) SET ( 1, ${now.setDate (now.getDate() + 14)}) WHERE id = ${req.body.id}`, (err, row) =>{

        if (err) throw err
        else {
            res
        }
    })

})















module.exports = router;




//  router.get('/project/create', (req, res, next) => {
//     res.render('../views/project-create.ejs',
//     {
//         page_title: "Project Creation"
//     });
// })
 
// /* GET  project page. */
// router.get('/project', function(req, res, next) {
      
//  connection.query('SELECT * FROM projectapp1.projects ORDER by id',function(err, rows, fields)     {

//         if(err){
//             //req.flash('error', err); 
//             res.render('project',
//             {
//                 page_title: "Project List",
//                 data: ''
//             });   
//         }else{
            
//             res.render('project',
//             {
//                 page_title: "Project List",
//                 data: rows
//             });
//         }                          
//          });
//     });





// /*-------------- GET students edit page. --------------------*/


// router.get('/project/edit/:id', function(req, res, next) {
      
//     connection.query('SELECT * FROM projectapp1.projects WHERE id='+ req.params.id, function(err,row)     {
    
//            if(err){
//                //req.flash('error', err); 
//                res.render('project-edit',
//                {
//                    page_title: "Project Edit",
//                    project: ''
//                });   
//            }else{
               
//             res.render('project-edit',
//             {
//                     page_title: "Project Edit",
//                     project: row
//                });
//            }
                               
//             });
           
//        });


//    /*---------------------- Update the The Project edit page. -----------------------*/
   
// router.post('/project/update', function(req, res, next) {
      
//     let sqlQuery = "UPDATE projectapp1.projects SET proj_title ='" + req.body.p_title + 
//                                         "', proj_desc ='" + req.body.p_desc + 
//                                         "', proj_start_dt ='" +  req.body.start_date + 
//                                         "', proj_due_dt ='" + req.body.end_date + 
//                                         "' WHERE id = " + req.body.id;

//     connection.query(sqlQuery, function(err,rows)     {
    
//                //req.flash('error', err); 
//                res.redirect('/project');   
//                next();                
//             });
           
//        });

//          /* GET students DELETE METHOD. */
// router.get('/project/delete/:id', function(req, res, next) {
     
//   connection.query('DELETE FROM projectapp1.projects WHERE Id='+ req.params.id, function(err,row)     {
 
//          if(err){
//              req.flash('error', err);
           
//          }else{
//            req.flash('success', 'Deleted successfully!!');
          
//           res.redirect('/project');  
//           next();      
//          }
                             
//           });
         
//      });



//      router.post('/project/add', function(req, res, next) {

//       let projectadd = {

    
//         proj_title : req.body.p_title ,
//         proj_desc : req.body.p_desc ,
//         proj_start_dt :  req.body.start_date ,
//         proj_due_dt : req.body.end_date 
        
//         }
      
//       let sqlQuery = "INSERT INTO projectapp1.projects SET ?"

      
      
  
//       let vQuery = connection.query(sqlQuery, projectadd,(err, results) =>  {
      
//         if(err) throw err;
//         // res.send(JSONResponse(results));
        
        
       
//       });
//       res.redirect('/project');   
//       next();  
//       }); 
              

// function redirectTo(locationURL) {
//     response.writeHead(301, {
//         Location: locationURL
//       }).end();
// }
