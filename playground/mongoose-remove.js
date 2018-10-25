const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// DEPRICATED
// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({
//   _id: '5bd205cf116cc427aa4b0b3f'
// }).then((todo) => {
//   console.log(todo);;
// });

Todo.findByIdAndRemove('5bd205cf116cc427aa4b0b3f').then((todo) => {
  console.log(todo);
});
