exports.withStatusCode = (statusCode, formatter = null) => {
	if (100 > statusCode || statusCode > 599) {
		throw new Error('status code out of range');
	}

	const hasFormatter = typeof formatter === 'function';
	const format = hasFormatter ? formatter : _ => _;
	return (data = null) => {
		const response = { statusCode: statusCode };
		if (data) { response.body = format(data); }
		return response;
	};
};