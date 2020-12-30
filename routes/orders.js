const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/** Requêtes sur la route '/orders' */
router.route('/')
    .get(orderController.searchOrders)
    .post(orderController.createOrder)

/** Requêtes sur la route '/orders/create' */
router.get('/create', (req, res) => {
    res.render('pages/orders/create');
})

/** Requêtes sur la route '/orders/id' */
router.route('/:id')
    .get(orderController.getOrderById)
    .put(orderController.updateOrderById)
    .delete(orderController.deleteOrderById)

/** Export du module */
module.exports = router;