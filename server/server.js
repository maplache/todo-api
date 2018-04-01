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
app.post('/todos', (req, res) => {
  console.log(req.body);

  // Crear todo
  var todo = new Todo({
    text: req.body.text
  });

  // Registrar todo y enviar resultado
  todo.save().then( (doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(e);
  });
});

// Inicializar
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
