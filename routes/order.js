const mongoose = require('mongoose');

/** Schéma d'un order */
const orderShema = mongoose.Schema({
    description: { type: String, required: true},
    imageUrl: {type: String, required: true},
    userId: { type: String, required: true},
    price: { type: Number, required: true}
})

module.exports = mongoose.model('Order', orderShema);