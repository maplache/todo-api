
var mongoose = require('mongoose');

// User Model
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true
  }
});

var User = mongoose.model('User', userSchema);

module.exports = {
  User
};
