class Event {
	constructor(eventID, hostID, secondHostID, title, description, time, location, postDate, images) {
		this.eventID = eventID;
		this.hostID = hostID;
		this.secondHostID = secondHostID; // Second Host Id which allow to update event info, but not able to delete or remove user
		this.description = description;
		this.time = time;
		this.location = location;
		this.postDate = postDate;
		this.images = images; // Description - Images,
	}
}

export class Time {
	constructor() {
		this.date = ""
		this.time = ""
	}
}

export class Location {
	constructor() {
		this.zip = "",
		this.address = "",
		this.city = "",
		this.state = ""
	}
}

module.exports = Event;