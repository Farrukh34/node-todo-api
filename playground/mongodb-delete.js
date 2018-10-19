// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  const db = client.db('TodoApp');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Prep for meeting'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Prep for meeting'}).then((result) => {
  //   console.log(result);
  // })

  // find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({name: 'Tina'}).then((result) => {
  //   console.log(result);
  // });


  var obj = new ObjectID('5bc9bad9744353dfc5cc751f');


  db.collection('Users').findOneAndDelete({_id: obj}).then((result) => {
    console.log(result);
  })




  // client.close();
});
