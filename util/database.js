const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_exp', 'root', 'pass', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
