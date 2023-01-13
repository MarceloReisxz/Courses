const Sequelize = require('sequelize');
const sequelize = new Sequelize('DEFINIÇÃO BANCO DE DADOS', { dialect: 'postgres' });

module.exports = sequelize;
