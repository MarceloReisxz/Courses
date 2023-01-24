const Sequelize = require('sequelize');
const sequelize = new Sequelize('INFORME SEU BANCO DE DADOS', { dialect: 'postgres' });

module.exports = sequelize;
