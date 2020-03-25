const path = require('path');
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

exports.verifyAccount = (async (req) => {
	const { body } = req;
	console.log(body)
	const param = {
		TableName: process.env.ACCOUNTS_TABLE,
		ExpressionAttributeValues: {
			':email': JSON.parse(body).email,
			':password': JSON.parse(body).password
		},
		FilterExpression:'email = :email AND password = :password'
	}
	const { Items } = await accountReq.query(param);
	return ok(Items)
});

exports.addEventToAccount = ( async (req) => {
	const { body } = req;
	const account = JSON.parse(body);
	await doclient.update({
		TableName: process.env.ACCOUNTS_TABLE,
		Key: {
			"id": account["id"]
		},
		UpdateExpression : "SET events = :newValue",
        ExpressionAttributeValues: {
			':newValue' : account["events"]
		}
	}, (err, res) => {
		console.log(res)
		return res;
	}).promise();
	return ok("okay")
});

exports.deleteAccountById = (async (event) => {
	const { acctId } = event.pathParameters;
	const idDelete = await accountReq.delete(acctId);
	if (idDelete) { return ok(idDelete); }
	return error({message: 'Can not find ID'});
});


exports.updateAccountById = (async (req) => {
	const { body } = req, { acctId } = pathParameters;
	const rowEffected = await accountReq.put(body, acctId);
	if (rowEffected === undefined) {
		return error({message: 'Can not find ID'});
	} else if (rowEffected) {
		return ok({message: `${acctId} updated`});
	}
	return error({message: 'Error occur while updating data'});
});

exports.createAccount = (async (event) => {
	const { body } = event;
	const acctId = JSON.parse(body).email.split('@')[0];
	const extraParams = {
		hostId: shortid.generate(),
		id: acctId
	};
	const object = Object.assign({}, extraParams, JSON.parse(body));
	const newAccount = new Account(object);
	const addNewStatus = await accountReq.post(newAccount, acctId);
	if (addNewStatus) { return ok({message: 'New Account created'}); }
	return error({ message: 'User Email already exist' });
});