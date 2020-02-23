const Event = require('../models/event.model.js');
const { doclient } = require('../config/database');
const RequestCall = require('../utils/request.util');
const statusCode = require('../utils/response.util');
const shortid = require('shortid');

const eventReq = new RequestCall(doclient, process.env.EVENTS_TABLE);
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

exports.getEventById = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Get an Event by ID'}),
	};
});

exports.getSearchEvents = (async (event) => {
	const { queryString } = event.pathParameters;
	const query = queryString.split(" ");
	const major = query[0].toUpperCase();
	const courseNumber = query[1].toUpperCase();
	
	const { Items } = await doclient.scan({
		TableName: process.env.EVENTS_TABLE,
		ExpressionAttributeValues: {
			':maj': major,
			':cn': courseNumber
		},
		FilterExpression:'major = :maj AND coursenumber = :cn'
	}, (err, res) => {
		return res
	}).promise();
	return ok(Items);
})

exports.getEvents = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Get all events'}),
	};
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
