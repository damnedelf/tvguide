const  Sequelize  = require('sequelize');
module.exports = new Sequelize('tvguide', 'damnedelf', 'killmenot', {
  host: 'localhost',
  dialect: `postgres`
});