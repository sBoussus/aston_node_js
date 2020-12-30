const Order = require('../models/order')

exports.searchOrders = (req, res, next) => {
  Order.find()
    .then(orders => res.render('pages/orders/orders', { orders: orders }))
    .catch(error => res.status(400).json({ error }))
}

exports.createOrder = (req, res, next) => {
  // Service
  const order = new Order({
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    userId: req.body.userId,
    price: req.body.price
  })
  // Repository
  order.save()
    .then(() => res.render('pages/orders/orders', { orders: orders }))
    .catch(error => res.status(400).json({ error }))
}

exports.getOrderById = (req, res, next) => {
  Order.findOne({ _id: req.params.id })
    .then(order => res.status(200).json(order))
    .catch(error => res.status(404).json({ error }))
}

exports.updateOrderById = (req, res, next) => {
  Order.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }))
}

exports.deleteOrderById = (req, res, next) => {
  Order.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }))
}
