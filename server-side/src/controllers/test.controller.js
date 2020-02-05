const { doclient } = require('../config/database.js');
const RequestCall = require('../utils/request.util');

exports.test = async () => {
	const a = new RequestCall(doclient, 'accounts');
	return {
		statusCode: 200,
		body: JSON.stringify(await a.list()),
	};
};