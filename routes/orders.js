const express = require('express');
const router = express.Router();
const Order = require('./order');

/** CRUD sur la route '/orders' */
router.route('/')
    .get((req, res, next) => {
        Order.find(function(err, ordersList) {
            if(err) {
                return next(err)
            }
            res.json(ordersList)
        })
    })
    .post((req, res, next) => {
        let order = new Order(req.body)
        order.save(function (err, postedOrder) {
            if(err) {
                return next(err)
            }
            res.json(postedOrder)
        })
    })

/** CRUD sur la route '/orders/id' */
// router.route('/:id')
//     .get((req, res) => {
//         let id = req.params.id;
//         res.status(200).send(`Voici l'order d'id ${id}`);
//     })
//     .put((req, res) => {
//         let id = req.params.id;
//         res.status(200).send(`Order d'id ${id} mis à jour`);
//     })
//     .delete((req, res) => {
//         let id = req.params.id;
//         res.status(204).send(`Order d'id ${id} supprimée`);
//     })

/** Export du module */
module.exports = router;