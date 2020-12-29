const express = require('express');
const router = express.Router();
const Order = require('./order');

/** Requêtes sur la route '/orders' */
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

/** Requêtes sur la route '/orders/id' */
router.route('/:id')
    .get((req, res, next) => {
        Order.findById({ _id: req.params.id}, function(err, order) {
            if(err) {
                return next(err)
            }
            res.json(order)
        })
    })
    .put((req, res, next) => {
        Order.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id}, function(err, updatedOrder) {
            if(err) {
                return next(err)
            }
            res.json(updatedOrder)
        })
    })
    .delete((req, res, next) => {
        Order.deleteOne({ _id: req.params.id}, function(err, deletedOrder) {
            if(err) {
                return next(err)
            }
            res.json(deletedOrder)
        })
    })

/** Export du module */
module.exports = router;