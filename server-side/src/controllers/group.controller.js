const Group = require('../models/group.model.js');

exports.createGroup = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Create an group'}),
	};
});

exports.getGroupById = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Get an group by ID'}),
	};
});

exports.getAllGroup = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Get all groups'}),
	};
});

exports.deleteGroupById = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Delete group by ID'}),
	};
});

exports.updateGroupById = (async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Update group by ID'}),
	};
});