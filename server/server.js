const controller = require('./controller');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(controller.options.cors)
  .use('/rooms/:id', express.static(path.join(__dirname, '../public')))
  .get('/reservations/:id', controller.get.roomDetailsAndAvailNights)
  .post('/reservations/:id', controller.post.booking)
  .listen(PORT, () => console.log(`listening on port ${PORT}`));
