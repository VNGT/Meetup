class SeederModel {
	constructor(dynamodb, docClient, tableName) {
		this._dynamodb = dynamodb;
		this._docClient = docClient;
		this._tableName = tableName;
	}

	async hasTable () {
		const tables = await this._dynamodb.listTables({ Limit: 5 }).promise();
		return tables.TableNames && tables.TableNames.indexOf(this._tableName) >= 0;
	}

	async createTable () {
		const tableSpec = {
			TableName: this._tableName,
			KeySchema: [
				{
					AttributeName: 'id',
					KeyType: 'HASH'
				}
			],
			AttributeDefinitions: [
				{
					AttributeName: 'id',
					AttributeType: 'S' // (S | N | B) for string, number, binary
				}
			],
			ProvisionedThroughput: {
				ReadCapacityUnits: 1,
				WriteCapacityUnits: 1,
			}
		};
		const result = await this._dynamodb.createTable(tableSpec).promise();
		return !!result.$response.error;
	}

	async deleteTable() {
		const result = await this._dynamodb.deleteTable({ TableName: this._tableName }).promise();
		return !!result.$response.err;
	}

	async seed(objects = []) {
		const putRequests = objects.map(c => ({
			PutRequest: {
				Item: Object.assign({}, c)
			}
		}));

		const params = {
			RequestItems: {
				[this._tableName]: putRequests
			}
		};

		await this._docClient.batchWrite(params).promise();
	}
}

module.exports = SeederModel;