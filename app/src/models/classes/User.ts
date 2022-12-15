import { UserDTO } from "models/dtos";

export class User {
	_id: string;
	firebaseUID: string;
	email: string;
	firstName: string;
	lastName: string;

	constructor(details: UserDTO) {
		this._id = details._id;
		this.firebaseUID = details.firebaseUID;
		this.email = details.email;
		this.firstName = details.firstName;
		this.lastName = details.lastName;
	}

	static get template(): User {
		return new User({
			_id: "",
			firebaseUID: "",
			email: "",
			firstName: "",
			lastName: "",
		});
	}
}
