const path = require('path');
const SeederModel = require('./Seeder');
const fakeAccountsData = require('./accounts.data.json');
const fakeEventsData = require('./events.data.json');
const fakeGroupsData = require('./groups.data.json');
const { dynamo, doclient } = require('../config/database');
const log = (...mgs) => console.log('>>', ...mgs);
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

// Initilize
const accountsSeeder = new SeederModel(dynamo, doclient, process.env.ACCOUNTS_TABLE);
const eventsSeeder = new SeederModel(dynamo, doclient, process.env.EVENTS_TABLE);
const groupsSeeder = new SeederModel(dynamo, doclient, process.env.GROUPS_TABLE);

const seedData = async (tableName, fakeDataObject, model) => {
	log(`Checking if ${tableName} table exists`);
	const exists = await model.hasTable();
	if (exists) {
		log(`Table ${tableName} exists, deleting`);
		await model.deleteTable();
	}

	log(`Creating ${tableName} table`);
	await model.createTable();

	log('Seeding data');
	await model.seed(fakeDataObject);
};

// Migrating Account table
seedData(process.env.ACCOUNTS_TABLE, fakeAccountsData, accountsSeeder)
	.then(() => log('Accounts Done!'))
	.catch(err => console.log(err));

// Migrating Event table
seedData(process.env.EVENTS_TABLE, fakeEventsData, eventsSeeder)
	.then(() => log('Events Done!'))
	.catch(err => console.log(err));

// // Migrating Event table
seedData(process.env.GROUPS_TABLE, fakeGroupsData, groupsSeeder)
	.then(() => log('Groups Done!'))
	.catch(err => console.log(err));
