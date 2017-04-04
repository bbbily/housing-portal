var express = require('express');
var session = require('express-session');
var massive = require('massive');
var bodyParser = require('body-parser');
var config = require('./config');
var controller = require('./dbCtrl');

var app = module.exports = express();
console.log("app.:" + app);
var port = 3000;

var dbConnection = "postgres://owhmkznh:hxxkeFT6WkOZZ5-8qrA1aTWn2uOBbDGT@stampy.db.elephantsql.com:5432/owhmkznh";

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));
app.use(session({"secret": config.sessionSecret}));

var db = massive.connect({connectionString : dbConnection},
  function(err, localdb){
     db = localdb;
      app.set('db', db);
  }
);

console.log(controller.GetBuildings);

app.get('/api/users', function(req,res,next) {
  db.get_users(function (err, result) {
    res.status(200).json(result);
  })
})

app.post('/api/users', function(req,res,next) {
  db.add_user(req.body.campus_id, req.body.first_name, req.body.last_name, req.body.email, function (err, result) {
    res.status(200).json("error: " + err);
  })
})

app.put('/api/users', function(req,res,next) {
  db.edit_user(req.body.id, req.body.campus_id, req.body.first_name, req.body.last_name, req.body.email, function (err, result) {
    res.status(200).json(result);
  })
})

app.delete('/api/users', function(req,res,next) {
  db.delete_user(req.body.id, function (err, result) {
    res.status(200).json("error: " + err);
  })
})


/*
// routes for info on DevMountain campuses
app.get('/api/campus', controller.GetCampuses);
app.post('/api/campus', controller.AddCampus);
app.put('/api/campus', controller.EditCampus);
app.delete('/api/campus', controller.DeleteCampus);

// routes for info on DevMountain housing properties
app.get('/api/building', controller.GetBuildings);
app.post('/api/building', controller.AddBuilding);
app.put('/api/building', controller.EditBuilding);
app.delete('/api/building', controller.DeleteBuilding);
*/

app.listen(port, function() {
    console.log('Listening on port ', port);
});


module.exports = app;