class Account {
	constructor(phone, password, name, dob, major, profile) {
		this.name = name;
		this.username = name.toLowerCase().replace(/\s/g,'');
		this.dob = dob;
		this.phone = phone;
		this.password = password;
		this.major = major;
		this.profile = (typeof profile === undefined) ? 'None' : profile;
	}
}

module.exports = Account;