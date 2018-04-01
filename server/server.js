var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

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

// Inicializar
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {app};
