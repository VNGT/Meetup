class RequestCall {

	/**
	 * Contructs a new contact repository
	 * @param {AWS.DynamoDB.DocumentClient} documentClient The Document Client
	 */
	constructor(documentClient, tableName) {
		this._documentClient = documentClient;
		this._tableName = {TableName: tableName};
	}

	/**
	 * Gets a list of contacts
	 * @returns {Promise<Models.Contact[]>} A list of contacts
	 */
	async list() {
		const params = this._createParamObject();
		const response = await this._documentClient.scan(params).promise();
		return response.Items || [];
	}

	/**
	 * Gets a contact by id
	 * @param {string} id The contact id
	 * @returns {Promise<Models.Contact>} The contact
	 */
	async get(id) {
		const params = this._createParamObject({ Key: { id } });
		const response = await this._documentClient.get(params).promise();
		return response.Item;
	}

	/**
	 * Add or replace a object
	 * @param {Models.object} object The object
	 * @returns {Promise<Models.object>} The object
	 */
	async put(object) {
		const params = this._createParamObject({ Item: object });
		await this._documentClient.put(params).promise();
		return object;
	}

	/**
	 * Add a object
	 * @param {Models.object} object The object
	 * @returns {Promise<Models.object>} The object
	 */
	async post(object) {
		const params = this._createParamObject({ Item: object });
		await this._documentClient.post(params).promise();
		return object;
	}

	/**
	 * Deletes a contact by id
	 * @param {string} id The contact id
	 * @return {Promise<string>} The id of the deleted contact
	 */
	async delete(id) {
		const params = this._createParamObject({ Key: { id } });
		await this._documentClient.delete(params).promise();
		return id;
	}

	_createParamObject(additionalArgs = {}) {
		return Object.assign({}, this._tableName, additionalArgs);
	}
}

module.exports = RequestCall;