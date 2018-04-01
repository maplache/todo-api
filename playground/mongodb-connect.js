
const MongoClient = require('mongodb').MongoClient;

// Conectar a la base de datos
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error){
    console.log('Unable to connect to database.');
    return;
  }

  console.log('Connected succesfully.');

  // const db = client.db('TodoApp');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //
  //   if(error){
  //     console.log('Unable to insert Todo', error);
  //     return;
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Cerrar conexion
  client.close();
});
