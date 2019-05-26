var express = require('express');
var conn = require('../config/database.js');
var router = express.Router();

// get all fournisseur
router.get('/', function(req, res, next){
	let sql = "SELECT * FROM image";
	let nbs = conn.query("select * from image");
	let query = conn.query(sql, function(err, results){
		if(err) throw err;
		res.send(JSON.stringify({"status":200, "error":false, "data":results, "total_fournisseur":results.length}));
	});
});

//get image by ID
router.get('/:id', function(req, res, next){
	var id = req.params.id
	let sql = "SELECT * FROM image WHERE id_image = ?";
	let query = conn.query(sql,[id], function(err, results){
		if(err) throw err;
		res.send(JSON.stringify({"status":200, "error":false, "data":results}));
	});
});

//create image 
router.post('/', function(req, res, next){
	var data ={ nom_fournisseur: req.body.nom_fournisseur };
	let sql = "INSERT INTO image SET ?";
	let query = conn.query(sql,[data], function(err, results){
		if (err) throw err;
		res.send(JSON.stringify({"status":200, "error":false, "data":results}));
	});
});

//update image
router.put('/:id', function(req, res, next){
	var id = req.params.id;
	var data = { url: req.body.url , title: req.body.title};
	let sql ="update image set url = '"+req.body.url+"' where id_image ="+req.params.id;
	let query = conn.query(sql, function(err, results){
		if(err) throw err;
		res.send(JSON.stringify({"status":200, "error":false, "data":results}));
	});
});
//delete image 
router.delete('/:id', function(req, res, next){
	var id = req.params.id;
	let sql ="delete from image  where id_image = ?";
	let query = conn.query(sql,id, function(err, results){
		if(err) throw err;
		res.send(JSON.stringify({"status":200, "error":false, "data":results}));
	});
});
module.exports = router;