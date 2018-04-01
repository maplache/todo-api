const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Remove all
Todo.remove({}).then( (result) => {
  console.log(result);
});

// Remove one
Todo.findOneAndRemove({ text: 'First test'}).then( (todo) => {
  console.log(todo);
});

// Remove one by ID
Todo.findByIdAndRemove('5ac15ae6d0999d471c06aad6').then( (todo) => {
  console.log(todo);
});
