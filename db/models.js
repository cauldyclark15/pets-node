const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const Goldfish = sequelize.define('goldfish', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: {type: Sequelize.STRING},
  owner: {type: Sequelize.STRING},
  birth: {type: Sequelize.DATE}
});

module.exports = Goldfish;
