class RequestCall {

	constructor(documentClient, tableName) {
		this._documentClient = documentClient;
		this._tableName = { TableName: tableName };
	}

	async list() {
		const params = this._createParamObject();
		const response = await this._documentClient.scan(params).promise();
		return response.Items || [];
	}

	async get(id) {
		const params = this._createParamObject({ Key: { id } });
		const response = await this._documentClient.get(params).promise();
		return response.Item;
	}

	async put(object, id) {
		const foundID = await this.get(id);
		if (!foundID || foundID === undefined) { return undefined; }
		const updateExpression = this._createUpdateExpression(object);
		const params = this._createParamObject({
			Key: {id},
			UpdateExpression: updateExpression[0],
			ExpressionAttributeValues: updateExpression[1]
		});
		// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html
		await this._documentClient.update(params).promise();
		return true;
	}

	async post(object, id) {
		// Make sure no duplicate id
		const found = await this.get(id);
		if (!found || found === undefined) {
			const params = this._createParamObject({ Item: object });
			await this._documentClient.put(params).promise();
			return true;
		}
		return false;
	}

	async delete(id) {
		const params = this._createParamObject({ Key: { id } });
		const foundId = await this.get(id);
		if (!foundId || foundId === undefined) { return null; }
		await this._documentClient.delete(params).promise();
		return id;
	}

	async query(param) {
		return await this._documentClient.scan(param, (err,res) => {
			return res;
		}).promise();
	}

	_createParamObject(additionalArgs = {}) {
		return Object.assign({}, this._tableName, additionalArgs);
	}

	_createUpdateExpression(object) {
		let updateExpression = 'SET ', attributeObject = {};
		for (var key of Object.keys(object)) {
			const currentVal = object[key];
			if (typeof(currentVal) != "object" && key != "id") {
				updateExpression += `${key} = :${key},`;
				attributeObject[`:${key}`] = currentVal;
			}
		}
		updateExpression = updateExpression.substring(0, updateExpression.length - 1);
		return [updateExpression, attributeObject];
	}
}

module.exports = RequestCall;