import { AtLeast } from "@customTypes/custom";
import { User } from "@entities/index";
import { UserDocument, UserModel } from "@models/user.model";

export class UserService {
	// create user
	static async createUser(
		user: AtLeast<User, "email" | "firebaseUID" | "firstName" | "lastName">,
	) {
		const { email, firebaseUID, firstName, lastName } = user;
		const dm = new UserModel();
		dm.email = email;
		dm.firebaseUID = firebaseUID;
		dm.firstName = firstName;
		dm.lastName = lastName;
		return await dm.save();
	}

	// get user by firebase uid
	static async getUserByFirebaseUID(
		firebaseUID: User["firebaseUID"],
	): Promise<UserDocument> {
		try {
			const userDoc = await UserModel.findOne({ firebaseUID }).exec();
			if (!userDoc) {
				throw Error("user_does_not_exist");
			}
			return userDoc;
		} catch (error) {
			throw error;
		}
	}
}
