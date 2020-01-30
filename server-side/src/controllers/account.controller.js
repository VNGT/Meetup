const Account = require('../models/account.model.js');

exports.getAccountById = (async () => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Get Account of Client by ID'}),
	};
});

exports.deleteAccountById = (async () => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Delete Account by ID'}),
	};
});

exports.updateAccountById = (async () => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Update Account by ID'}),
	};
});

exports.createAccount = (async () => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Create an Account'}),
	};
});