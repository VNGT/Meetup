exports.test = async() => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'Serverless Work Fine'}),
	};
};