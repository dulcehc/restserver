const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser')
require('./config/config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/user'));

mongoose.connect(process.env.URLDB, (err, res) => {
  if (err) throw err;

  console.log('Connected');
});

app.listen(process.env.PORT, () => {
  console.log('listening in port: ', process.env.PORT);
})