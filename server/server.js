const controller = require('./controller');
const bodyParser = require('body-parser');
const express = require ('express');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(express.static(__dirname + '/../public'))
  .get('/rooms/:id', controller.get.roomDetailsAndAvailNights)
  .post('/rooms/:id', controller.post.booking)
  .listen(PORT, () => console.log(`listening on port ${PORT}`));
