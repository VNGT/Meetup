const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		port: process.env.DB_PORT,
		logging: false,
		pool: {
			max: 5,
			min: 0,
			idle: 20000,
			handleDisconnects: true
		},
		dialectOptions: {
			requestTimeout: 100000
		},
		define: {
			freezeTableName: true
		}
	}
);

module.exports = sequelize;