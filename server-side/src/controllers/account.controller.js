const Account = require('../models/account.model.js');

exports.getAccount = (async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({message: 'Get Account of Client'}),
    };
});