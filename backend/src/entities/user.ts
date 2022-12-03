import { UserDocument } from "@models/user.model";
import { AuthToken } from "./auth-token";

export class User {
	id?: string;
	firebaseUID: string;
	email: string;
	tokens: AuthToken[];
	firstName: string;
	lastName: string;

	constructor(details: UserDocument) {
		this.id = details.id;
		this.firebaseUID = details.firebaseUID;
		this.email = details.email;
		this.tokens = details.tokens;
		this.firstName = details.firstName;
		this.lastName = details.lastName;
	}
}
