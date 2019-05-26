var mysql = require('mysql');
var config = require('./config');
//configurer la base
var conn = mysql.createConnection({
	host: config.hosname,
	user: config.username,
	password: config.password,
	database: config.database
});
//conneter la base
var server = conn.connect((err)=>{
	if(err) throw err;
	console.log('Mysql has been connected successfully  on the database server...');
	console.log('Open http://localhost:3000/');

});

module.exports = conn;