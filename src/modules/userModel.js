const Sequelize = require('sequelize');
const sequelize = require('../util/sequelize.js');

module.exports = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  }
})
