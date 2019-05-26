var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var date = new Date();
	var year = date.getFullYear();
	var contact = [
	     {name:"@miranavvs", date:  year},
	     {email:"email", url:"miranavvs@gmail.com"}
	];

	var urls_get = [

		{ name:"client", url:"http://localhost:3000/clients" },
		{ name:"commande", url:"http://localhost:3000/commandes" },
	    { name:"full commande", url:"http://localhost:3000/commandes/all" },
		{ name:"produits", url:"http://localhost:3000/produits" },
		{ name:"images", url:"http://localhost:3000/images" },
		{ name:"images_by_id", url:"http://localhost:3000/images/2" },
		{ name:"produits_by_id", url:"http://localhost:3000/produits/2" },
		{ name:"commandes_by_id", url:"http://localhost:3000/commandes/2" },
		{ name:"clients_by_id", url:"http://localhost:3000/clients/2" }
	];



  res.render('index', { 
  	    title: 'Api Rest nodejs Using express , mysql , npm ' ,  
  	    urls_get: urls_get,
  	    contact:contact
  	
  	});
});

module.exports = router;
