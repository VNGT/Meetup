const path = require('path');
const uuid = require('uuid');
const shortid = require('shortid');
const Account = require('../models/account.model.js');
const { doclient } = require('../config/database');
const RequestCall = require('../utils/request.util');
const statusCode = require('../utils/response.util');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

// Intilize account class request
const accountReq = new RequestCall(doclient, process.env.ACCOUNTS_TABLE);

// Status Code
const ok = statusCode.withStatusCode(200, JSON.stringify);
const error = statusCode.withStatusCode(500, JSON.stringify);

exports.getAccountById = (async (event) => {
	const { acctId } = event.pathParameters;
	const data = await accountReq.get(acctId);
	if (data === undefined || !data) {
		return error({message: 'Can not find ID'});
	}
	return ok(data);
});

exports.deleteAccountById = (async (event) => {
	const { acctId } = event.pathParameters;
	const idDelete = await accountReq.delete(acctId);
	if (!idDelete) { return ok(idDelete); }
	return error({message: 'Can not find ID'});
});

exports.updateAccountById = (async (event) => {
	const { pathParameters, body } = event;
	const { acctId } = pathParameters;
	const updatedObject = await accountReq.put(body, acctId);
	if (!updatedObject) { return ok({message: `${acctId} updated`}); }
	return error({message: 'Can not find ID'});
});

exports.createAccount = (async (event) => {
	const { body } = event;
	const extraParams = {
		hostId: shortid.generate(),
		id: uuid()
	};
	const object = Object.assign({}, extraParams, JSON.parse(body));
	const newAccount = new Account(object);
	await accountReq.post(newAccount, uuid());
	return ok({message: 'New Account created'});
});