const Event = require('../models/event.model.js');

exports.createEvent = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Create an Event'}),
	};
});

exports.getEventById = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Get an Event by ID'}),
	};
});

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