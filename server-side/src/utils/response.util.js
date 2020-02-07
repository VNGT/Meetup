exports.withStatusCode = (statusCode, formatter = null) => {
	if (100 > statusCode || statusCode > 599) {
		throw new Error('status code out of range');
	}

	const hasFormatter = typeof formatter === 'function';
	const format = hasFormatter ? formatter : _ => _;
	return (data = null) => {
		let response = { statusCode: statusCode };
		if (data) {
			(statusCode === 200) ? response.body = format({status: true, data: data})
				: response.body = format({status: false, data: data});
		}
		return response;
	};
};