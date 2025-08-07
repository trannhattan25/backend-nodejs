const mongoose = require('mongoose');
// shape data
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String
});
const User = mongoose.model('user', userSchema);

module.exports = User;
// const cat = new Kitten({ name: 'Nhan Tan cat' });
// cat.save();