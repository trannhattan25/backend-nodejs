const mongoose = require('mongoose');
// shape data
const customerSchema = new mongoose.Schema({
    name: { String, require: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,

}, { timestamps: true }
);
const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;
// const cat = new Kitten({ name: 'Nhan Tan cat' });
// cat.save();