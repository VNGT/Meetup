class Event {
	constructor(eventID, hostID, secondHostID, title, description, time, location, postDate, images) {
		this.eventID = eventID;
		this.hostID = hostID;
		this.secondHostID = secondHostID; // Second Host Id which allow to update event info, but not able to delete or remove user
		this.time = title;
		this.description = description;
		this.time = time;
		this.location = location;
		this.postDate = postDate;
		this.images = images; // Description - Images
	}
}

module.exports = Event;