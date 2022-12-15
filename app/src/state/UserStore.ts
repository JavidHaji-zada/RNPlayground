import { User } from "@models/classes";
import { UserDTO } from "@models/dtos";
import { makeObservable, observable } from "mobx";

export class UserStore extends User {
	constructor(details: UserDTO) {
		super(details);
		makeObservable(this, {
			_id: observable,
			email: observable,
			firstName: observable,
			lastName: observable,
		});
	}

	// Update User with new information
	updateFromJson(json: Partial<UserDTO>) {
		(Object.keys(json) as (keyof UserDTO)[]).map((key: keyof UserDTO) => {
			this[key] = json[key]!;
		});
	}
}
