const express = require('express');
const app = express();

app.get('/', function (req, res) {
  // Runs when a GET request is made to http://localhost:3000/
  res.send('Hello World');

  // Calling res.send() again will throw an error because a response can only be sent once.
});

app.get('/asd', function (req, res) {
  // Runs when a GET request is made to http://localhost:3000/asd
  res.send('Heyyy from asd endpoint');
});

app.post('/asd', function (req, res) {
  // Runs when a POST request is made to http://localhost:3000/asd
  res.send('Hii from asd_post endpoint');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});