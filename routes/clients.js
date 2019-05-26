var express = require('express');
var conn = require('../config/database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
	let sql = 'select * from client ';
	let query = conn.query(sql, function(err, results){
		if (err) throw err
		res.send(JSON.stringify({"status":200, "error":false, "data":results}));
	})

});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	let sql = 'select * from client where id_client = ? ';
	let query = conn.query(sql,[id], function(err, results){
		if (err) throw err
		res.send(JSON.stringify({"status":200, "error":false, "data":results}));
	})
});

router.post('/', function(req, res, next){
var data = {nom_client: req.body.nom_client};
   let sql = "INSERT INTO client SET ?";
   let query = conn.query(sql, data, function(err, results){
   	if(err) throw err;
   	res.send(JSON.stringify({"status":200, "error": false,"msg":"sucess", "data":results}));
   })
});

/* DELETE users listing. */
router.delete('/:id', function(req, res, next) {
	var id = req.params.id;
	let sql = 'delete from client where id_client = ? ';
	let query = conn.query(sql,[id], function(err, results){
		if (err) throw err
		res.send(JSON.stringify({"status":200, "error":false, "data":results}));
	})
});

/* PUT users listing. */
//update product
router.put('/:id',(req, res) => {
  let sql = "UPDATE client SET nom_client='"+req.body.nom_client+"' WHERE id_client="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});



module.exports = router;
