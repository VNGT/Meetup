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
		const params = this._createParamObject({ Item: object });
		const foundID = await this.get(id);
		if (!foundID || foundID === undefined) { return null; }
		await this._documentClient.put(params).promise();
		return object;
	}

	async post(object, id) {
		const params = this._createParamObject({ Key: id, Item: object, Expected: {	email: { Exists: false }} });
		const response = await this._documentClient.put(params).promise();
		console.log(response);
		return object;
	}

	async delete(id) {
		const params = this._createParamObject({ Key: { id } });
		const foundId = await this.get(id);
		if (!foundId || foundId === undefined) { return null; }
		await this._documentClient.delete(params).promise();
		return id;
	}

	_createParamObject(additionalArgs = {}) {
		return Object.assign({}, this._tableName, additionalArgs);
	}
}

module.exports = RequestCall;