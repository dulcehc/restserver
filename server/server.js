const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./config/config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/user', function (req, res) {
  res.json('get user')
});

app.post('/user', function (req, res) {
  let body = req.body;

  if (body.name === undefined) {
    res.status(400).json({
      ok: false,
      message: 'the name is mandatory'
    });
  } else {
    res.json({ person: body });
  }

});
app.put('/user/:id', function (req, res) {
  let id = req.params.id;
  res.json({ id });
});
app.delete('/user', function (req, res) {
  res.json('delete user')
});
app.listen(process.env.PORT, () => {
  console.log('listening in port: ', process.env.PORT);
})