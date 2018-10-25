const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bd1c8a87a7a2412d5cf0e4f11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid: ', id);
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch((e) => console.log(e));

var userId = '5bca170306203902299dda57';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
