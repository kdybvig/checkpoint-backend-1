const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderDate: {
        required: true,
        type: String
    },
    orderTime: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: String
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;