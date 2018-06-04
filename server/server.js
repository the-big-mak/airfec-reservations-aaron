const controller = require('./controller.js');
const bodyParser = require('body-parser');
const express = require ('express');


const app = express();
const PORT = process.ENV.route || 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
