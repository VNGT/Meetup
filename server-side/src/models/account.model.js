class Account {
	constructor(phone, email, name, dob, major) {
		this.name = name;
		this.username = name.toLowerCase().replace(/\s/g,'');
		this.dob = dob;
		this.phone = phone;
		this.email = email;
		this.major = major;
	}
}

module.exports = Account;