const path = require('path');
const shortid = require('shortid');
const Account = require('../models/account.model.js');
const { doclient } = require('../config/database');
const RequestCall = require('../utils/request.util');
const statusCode = require('../utils/response.util');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

// Intilize account class request
const accountReq = new RequestCall(doclient, process.env.ACCOUNTS_TABLE);
const eventReq = new RequestCall(doclient, process.env.EVENTS_TABLE);


// Status Code
const ok = statusCode.withStatusCode(200, JSON.stringify);
const error = statusCode.withStatusCode(500, JSON.stringify);

exports.getAccountById = (async (req) => {
	const { acctId } = req.pathParameters;
	const data = await accountReq.get(acctId);
	if (data === undefined || !data) {
		return error({message: 'Can not find ID'});
	}
	return ok(data);
});

exports.verifyAccount = (async (req) => {
	const { body } = req;
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
	if ((new Set(account["events"])).size < account["events"].length) {
		return ok("fail")
	}
	const newEventId = account["events"][account["events"].length - 1]
	const accountUpdate = await doclient.update({
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
	const eventUpdate = await doclient.update({
		TableName: process.env.EVENTS_TABLE,
		Key: {
			"id": newEventId
		},
		UpdateExpression: "SET members = list_append(members, :i)",
		ExpressionAttributeValues: {
			':i': [account["id"]],
		}
	}).promise();
	console.log(eventUpdate)
	return ok("okay")
});

exports.deleteAccountById = (async (req) => {
	const { acctId } = req.pathParameters;
	const idDelete = await accountReq.delete(acctId);
	if (idDelete) { return ok(idDelete); }
	return error({message: 'Can not find ID'});
});

exports.updateAccountInfoById = (async (req) => {
	const { body } = req, { acctId } = req.pathParameters;
	let data = JSON.parse(body);
	if (data["account"]) {
		data = data.account
	}
	const rowEffected = await accountReq.put(data, acctId);
	if (rowEffected === undefined) {
		return error({message: 'Can not find ID'});
	} else if (rowEffected) {
		return ok({message: `${acctId} updated`});
	}
	return error({message: 'Error occur while updating data'});
});

exports.deleteAccountEventById = (async (req) => {
	const { body } = req, { accId } = req.pathParameters;
	const account = JSON.parse(body)["account"];
	const originalData = await accountReq.get(accId);
	let index = -1;
	for (var i in account["events"]) {
		if (account["events"][i] != originalData["events"][i]) {
			index = i;
			break;
		}
	}
	if (index == -1) {
		index = account["events"].length
	}
	const eventId = originalData["events"][index];
	const eventOriginal = await eventReq.get(eventId);
	let memberIndex = 0;
	for (var i in eventOriginal["members"]) {
		if (eventOriginal["members"][i] == accId) {
			memberIndex = i;
			break
		}
	}

	await doclient.update({
		TableName: process.env.EVENTS_TABLE,
		Key: {
			"id": eventId
		},
		UpdateExpression: `REMOVE members[${memberIndex}]`
	}).promise()
	await doclient.update({
		TableName: process.env.ACCOUNTS_TABLE,
		Key: {
			"id": accId
		},
		UpdateExpression : `REMOVE events[${index}]`
	}, (err, res) => {
		console.log(res)
		return res;
	}).promise();
	return ok("okay")
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
	if (addNewStatus) { return ok(newAccount); }
	return error({ message: 'User Email already exist' });
});