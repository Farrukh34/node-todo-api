const {SHA256} = require('crypto-js');
const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = 'abc123!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  })
});

var hashedPassword = '$2a$10$TNbhY3lWiRfUohTPRy/Rbeo0mnmU3ippdO0oNQaonPHy4moQI4yFi';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'joe@ninety.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'donald@trump.com',
  password: 'userTwoPass'
}];

console.log('userOne: ', users[0].tokens[0].token);



// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = 'It is Halloween!!!';
// var hash = SHA256(message).toString();
//
// console.log('Message: ', message);
// console.log('HASH: ', hash);
