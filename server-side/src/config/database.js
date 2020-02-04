const AWS = require('aws-sdk');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const options = {
	endpoint: process.env.AWS_ENDPOINT,
	region: 'localhost',
	accessKeyId: process.env.AWS_KEY,
	secretAccessKey: process.env.AWS_SECRETKEY
};

const dynamo = new AWS.DynamoDB(options);
const doclient = new AWS.DynamoDB.DocumentClient({ service: dynamo });
module.exports = { dynamo, doclient };