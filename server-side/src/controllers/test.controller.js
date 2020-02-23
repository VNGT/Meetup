const { doclient } = require('../config/database');

exports.test = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify('Server Working!!!!'),
	};
};