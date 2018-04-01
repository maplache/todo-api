const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ac140afa01f5e477878e9d3';

if(!ObjectID.isValid(id)){
  console.log('ID is invalid');
}

Todo.find({
  _id: id
}).then( (todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then( (todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then( (todo) => {

  if(!todo){
    console.log('Not found');
    return;
  }
  console.log('Todo by Id', todo);
}, (error) => {
  console.log(error);
});
