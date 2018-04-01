
const {MongoClient, ObjectID} = require('mongodb');

// Conectar a la base de datos
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error){
    console.log('Unable to connect to database.');
    return;
  }

  console.log('Connected succesfully.');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5abfc76ce188be2394c39977')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch Todos');
  // });

  db.collection('Todos').find().count().then( (count) => {
    console.log(`Todos count: ${count}`);
  }, (error) => {
    console.log('Unable to fetch Todos');
  });

  // Cerrar conexion
  client.close();
});
