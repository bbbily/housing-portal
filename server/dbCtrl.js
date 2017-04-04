var app = require('./server.js');
console.log("dbapp: ", app);

module.exports = {
    GetCampuses: function(){
        db.get_campuses(function(err, prod) {
            console.log(prod);
            res.status(200).send(prod);
        })
    },
    AddCampus: function(){
        db.create_campus(function (err, prod) {
            console.log(err, prod); 
            res.status(200).send("errors: " + err + " %%%% prods: " + prod);
        })
    },
    EditCampus: function(){
        db.update_campus(req.body.id, req.body.location_name, function(err, prod) {
            console.log("changing locations");
            res.status(200).send(prod);
        })
    },
    DeleteCampus: function() {
        db.delete_campus(req.body.id, function(err, prod) {
            res.status(200).send(prod);
        })
    },
    GetBuildings: function(){
        db.get_buildings(function(err, prod) {
            console.log(prod);
            res.status(200).send(prod);
        })
    },
    AddBuilding: function(){
        db.create_building(function (err, prod) {
            console.log(err, prod); 
            res.status(200).send("errors: " + err + " %%%% prods: " + prod);
        })
    },
    EditBuilding: function(){
        db.update_building(req.body.id, req.body.location_name, function(err, prod) {
            console.log("changing locations");
            res.status(200).send(prod);
        })
    },
    DeleteBuilding: function() {
        db.delete_building(req.body.id, function(err, prod) {
            res.status(200).send(prod);
        })
    }
}
