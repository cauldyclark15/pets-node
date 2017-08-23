const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:Fastest15@localhost:3306/pets');

module.exports = sequelize;
