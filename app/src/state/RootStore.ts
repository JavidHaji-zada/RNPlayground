import { User } from "@models/classes";
import { UserStore } from "./UserStore";

export class RootStore {
	userStore: UserStore;

	constructor() {
		this.userStore = new UserStore(User.template);
	}
}
