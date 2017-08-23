const express = require('express');
const bodyParser = require('body-parser');
require('./db/sequelize');

const server = express();
const goldfish = require('./routes/goldfish');

server.use(bodyParser.json());
server.use('/', express.static('./'));
server.use(goldfish);

server.listen(8000, () => {
  console.log('Server is running at port 8000');
});
