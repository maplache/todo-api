
var mongoose = require('mongoose');

// Todo Model
var todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  Todo
};
