
const {MongoClient, ObjectID} = require('mongodb');

// Conectar a la base de datos
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error){
    console.log('Unable to connect to database.');
    return;
  }

  console.log('Connected succesfully.');

  const db = client.db('TodoApp');

  // Delete Many

  // db.collection('Todos').deleteMany({text: 'Something to do'}).then( (result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Error');
  // });

  // Delete One

  // db.collection('Todos').deleteOne({text: 'Something to do'}).then( (result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Error');
  // });

  // Find one and delete

  // db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Error');
  // })

  // Cerrar conexion
  client.close();
});
