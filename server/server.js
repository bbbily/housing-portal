var express = require('express');
var session = require('express-session');
var massive = require('massive');
var bodyParser = require('body-parser');
var config = require('./config');

var app = express();

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

app.get('/', function(req, res, next) {
  db.get_campuses(function(err, prod) {
    console.log(prod);
    res.status(200).send(prod);
  })
})

app.post('/', function(req, res, next) {
  db.create_campus(function (err, prod) {
    console.log(err, prod); 
    res.status(200).send("errors: " + err + " %%%% prods: " + prod);
  })
})

app.put('/', function (req, res, next) {
  db.update_campus(req.body.id, req.body.location_name, function(err, prod) {
    console.log("changing locations");
    res.status(200).send(prod);
  })
})

app.delete('/', function (req, res, next) {
  db.delete_campus(req.body.id, function(err, prod) {
    res.status(200).send(prod);
  })
})



app.listen(port, function() {
    console.log('Listening on port ', port);
});