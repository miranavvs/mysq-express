var express = require('express');
var conn = require('../config/database.js');
var router = express.Router();

//CREATE product 
router.post('/',(req, res, next)=>{
	let data = {

		id_fournisseur: req.body.id_fournisseur,
		product_name: req.body.product_name,
		pu: req.body.pu

	};
	let sql = "INSERT INTO product SET ?";
	let query = conn.query(sql, data ,(err, results)=>{
		if(err) throw err;
       res.send(JSON.stringify({"status":200, "error":false, "response":results}));
	});
});

//GET ALL roduct
router.get('/',(req, res, next)=>{
    let sql="SELECT * FROM product";
    let query = conn.query(sql, (err, results)=>{
    	if(err) throw err;
    	res.send(JSON.stringify({"status":200, "error":false, "response":results}));
    });
});

//GET product by id 
router.get('/:id',(req, res)=>{
  let id = req.params.id;
  let sql = "SELECT * FROM  product WHERE id_product = ?";
  let query = conn.query(sql, [id],(err, results)=>{

    if(err) throw err;
     if(results.length === 0){
    res.send (JSON.stringify({"status":200, "error":false,"msg":"Product not found","data":results}));
    }else{
     res.send (JSON.stringify({"status":200, "error":false,"data":results}));
    }
  });
});

 //DELETE product
router.delete('/:id',(req, res, next)=>{
 	      let id  = req.params.id;
          let sql = "DELETE FROM product where id_product=?";
          let query = conn.query(sql, [id], (err, results)=>{
               if(err) throw err;
               res.send(JSON.stringify({"status":200, "error":false, "response":results}))
        });
});

module.exports = router;

