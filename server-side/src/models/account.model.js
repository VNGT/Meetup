class Account {
	constructor(object) {
		this.id = object.id;
		this.hostId = object.hostId;
		this.firstname = object.firstname;
		this.lastname = object.lastname;
		this.email = object.email;
		this.password = object.password;
		this.profile = (typeof object.profile === undefined) ? 'None' : object.profile;
		this.groups = [];
		this.eventJoined = [];
		this.eventCreated = [];
	}
}

module.exports = Account;