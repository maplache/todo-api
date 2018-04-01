const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

//Puerto que Heroku decide usar
const port = process.env.PORT || 3000;

var app = express();

// Middleware
app.use(bodyParser.json());

// Routing

// Nuevo todo
app.post('/todos', (req, res) => {

  // Crear objeto todo
  var todo = new Todo({
    text: req.body.text
  });

  // Registrar todo y enviar resultado
  todo.save().then( (doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

// Buscar todos los todos
app.get('/todos', (req, res) => {

  // Buscar todos los todos
  Todo.find().then( (todos) => {
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  });
});

// Buscar todo especifico
app.get('/todos/:id', (req, res) => {

  // ID del todo
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  // Buscar todo por id
  Todo.findById(id).then( (todo) => {

    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});

  }, (error) => {
    res.status(400).send();
  });
});

// Eliminar todo
app.delete('/todos/:id', (req, res) => {

  // ID del todo
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  // Eliminar
  Todo.findByIdAndRemove(id).then( (todo) => {

    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }, (error) => {
    res.status(400).send();
  });

});

// Inicializar
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {app};
