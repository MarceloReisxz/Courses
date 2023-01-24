const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:ti@cc@localhost:5432/angular', { dialect: 'postgres' });

module.exports = sequelize;