const AWS = require('aws-sdk');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

let option = {
	region: process.env.REGION,
	accessKeyId: process.env.AWS_KEY,
	secretAccessKey: process.env.AWS_SECRETKEY
};

if (process.env.AWS_ENDPOINT) {
	// if process.env.AWS_ENDPOINT found -> running on local
	// if process.env.AWS_ENDPOINT not found -> running on real dynamo
	option['endpoint'] = process.env.AWS_ENDPOINT;
}

const dynamo = new AWS.DynamoDB(option);
const doclient = new AWS.DynamoDB.DocumentClient({ service: dynamo });
module.exports = { dynamo, doclient };