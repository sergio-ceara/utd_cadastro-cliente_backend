const env = require('./env.js'); 
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
  	dialect: env.dialect,
	port: env.port,
  	//operatorsAliases: false,	 
	logging: console.log, // Opcional: para ver os logs de SQL
	dialectOptions: {
		connectTimeout: 10000 // Tempo em milissegundos
	},	
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
	 
db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);
	 
module.exports = db;     
