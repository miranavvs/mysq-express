var express = require('express');
var conn = require('../config/database.js')
var router = express.Router();


//READ COMMANDE
router.get('/', (req, res, next) => {
    let sql = "SELECT * FROM commande";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": 200, "data": results }));
    });
});
//READ FULL COMMAND
router.get('/all', (req, res) => {
        let sql = "select * from commande_list";
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": false, "data":[{'commande':results},{'received_command':results.length} ]}));
        });
    })
    //CREATE AND UPDATE COMMANDE
router.post('/', (req, res, next) => {
    var data = { id_client: req.body.id_client, id_product: req.body.id_product, quantite: req.body.quantite };
    let id_cli = req.body.id_client;
    let id_prod = req.body.id_product;
    let qtt = req.body.quantite;
    let sql = "select * from commande where id_client = ? and id_product = ? ";
    let query = conn.query(sql, [req.body.id_client, req.body.id_product], (err, results) => {
        let n = results.length;
        console.log(n);
        if (n === 0) {

            let sql = "INSERT INTO commande SET ?";
            let query = conn.query(sql, data, (err, results) => {
                if (err) throw err;
                res.send(JSON.stringify({ "status": 200, "error": false, "msg": "New commande has been insered", "response": results }));
            });

        } else if (n > 0) {

            let sql = "UPDATE commande SET quantite = quantite + ? WHERE id_client = ? and id_product = ? "
            let query = conn.query(sql, [qtt, id_cli, id_prod], (err, results) => {
                res.send(JSON.stringify({ "status": 200, "error": false, "msg": "Updated", "data": results }));
            });
        }
    });
});
//DELETE COMMANDE
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    let sql = "DELETE FFOM commande WHERE id_product = ?";
    let query = conn.query(sql, [id], (err, results) => {
        res.send(JSON.stringify({ "status": 200, "error": false, "msg": "Commande has been deleted successfully", "response": results }));
    });
})

module.exports = router;