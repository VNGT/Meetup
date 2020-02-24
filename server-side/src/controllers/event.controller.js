const Event = require('../models/event.model.js');
const { doclient } = require('../config/database');
const RequestCall = require('../utils/request.util');
const statusCode = require('../utils/response.util');
const shortid = require('shortid');

const eventReq = new RequestCall(doclient, process.env.EVENTS_TABLE);
const accountReq = new RequestCall(doclient, process.env.ACCOUNTS_TABLE);

const ok = statusCode.withStatusCode(200, JSON.stringify);
const error = statusCode.withStatusCode(500, JSON.stringify);

exports.createEvent = (async(event) => {
	const { body } = event;
	const id = shortid.generate()
	const object = Object.assign({}, {id: id}, JSON.parse(body))
	const addNewStatus = await eventReq.post(object, id)
	if (addNewStatus) { return ok({message: 'New Event created'}); }
	return error({ message: 'Event already exist' });
});

exports.getEventById = (async(event) => {
	const { eventId } = event.pathParameters;
	const data = await eventReq.get(eventId);
	if (data === undefined || !data) {
		return error({message: 'Can not find ID'});
	}
	return ok(data);
});

exports.getSearchEvents = (async (event) => {
	const { queryString } = event.pathParameters;
	const query = queryString.split("_");
	const major = query[0].toUpperCase();
	const courseNumber = query[1].toUpperCase();
	const param = {
		TableName: process.env.EVENTS_TABLE,
		ExpressionAttributeValues: {
			':maj': major,
			':cn': courseNumber
		},
		FilterExpression:'major = :maj AND coursenumber = :cn'
	}
	const { Items } = await eventReq.query(param);
	Items.sort((a, b) => {
		if (a.major.localeCompare(b.major) == 0) {
			return a.coursenumber.localeCompare(b.coursenumber);
		}
		return a.major.localeCompare(b.major);
	});
	for (var item of Items) {
		var account = await accountReq.get(item.host);
		item.host = account["firstname"] + " " + account["lastname"];
	}
	return ok(Items);
});

exports.getEvents = (async() => {
	const param = {
		TableName: process.env.EVENTS_TABLE
	}
	const { Items } = await eventReq.query(param);
	Items.sort((a, b) => {
		if (a.major.localeCompare(b.major) == 0) {
			return a.coursenumber.localeCompare(b.coursenumber);
		}
		return a.major.localeCompare(b.major);
	});
	for (var item of Items) {
		var account = await accountReq.get(item.host);
		item.host = account["firstname"] + " " + account["lastname"];
	}
	return ok(Items);
});

exports.deleteEventById = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Delete Event by ID'}),
	};
});

exports.updateEventById = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Update Event by ID'}),
	};
});
