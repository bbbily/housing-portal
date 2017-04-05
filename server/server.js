var express = require('express');
var session = require('express-session');
var massive = require('massive');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');
var controller = require('./dbCtrl');

var app = module.exports = express();
var port = 3000;

var dbConnection = "postgres://owhmkznh:hxxkeFT6WkOZZ5-8qrA1aTWn2uOBbDGT@stampy.db.elephantsql.com:5432/owhmkznh";

app.use(express.static(__dirname + "../build"));
app.use(bodyParser.json());
app.use(cors());
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
    console.log(req.body.id + " <-- id");
    res.status(200);
  });
  db.get_users(function (err, result) {
    res.status(200).json(result);
  });
})

app.put('/api/users', function(req,res,next) {
  db.edit_user(req.body.id, req.body.campus_id, req.body.first_name, req.body.last_name, req.body.email, function (err, result) {
    res.status(200).json(result);
  })
})

app.delete('/api/users', function(req,res,next) {
  db.delete_user(req.body.id, function (err, result) {
    console.log(req.body.id, req.body.first_name);
    res.status(200).json(err + result);
  })
})

// routes for info on DevMountain campuses
app.get('/api/campus', function(req, res, next) {
  db.get_campuses(function(err, prod) {
    console.log(prod);
    res.status(200).send(prod);
  })
})

app.post('/api/campus', function(req, res, next) {
  db.create_campus(function (err, prod) {
    console.log(err, prod);
    res.status(200).send("errors: " + err + " %%%% prods: " + prod);
  })
})

app.put('/api/campus', function (req, res, next) {
  db.update_campus(req.body.id, req.body.location_name, function(err, prod) {
    console.log("changing locations: ", req.body.location_name);
    res.status(200).send(prod);
  })
})

app.delete('/api/campus', function (req, res, next) {
  db.delete_campus(req.body.id, function(err, prod) {
    res.status(200).send(prod);
  })
})
/*
// routes for info on DevMountain housing properties
app.get('/api/building', controller.GetBuildings);
app.post('/api/building', controller.AddBuilding);
app.put('/api/building', controller.EditBuilding);
app.delete('/api/building', controller.DeleteBuilding);
*/

app.listen(port, function() {
    console.log('Listening on port ', port);
});
