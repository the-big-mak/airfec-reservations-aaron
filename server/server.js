const controller = require('./controller.js');
const bodyParser = require('body-parser');
const express = require ('express');
const controller = require('./controller');

const app = express();
const PORT = process.ENV.route || 3004;

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(express.static(__dirname + '/../public'))
  .get('/rooms/:id', controller.get.availNights)
  .post('/rooms/:id', controller.post.booking)
  .listen(PORT, () => console.log(`listening on port ${PORT}`));
