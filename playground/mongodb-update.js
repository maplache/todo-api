
const {MongoClient, ObjectID} = require('mongodb');

// Conectar a la base de datos
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error){
    console.log('Unable to connect to database.');
    return;
  }

  console.log('Connected succesfully.');

  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ac0f311d481df26007aa21e')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  }, (error) => {
    console.log('Error');
  });

  // Cerrar conexion
  client.close();
});
