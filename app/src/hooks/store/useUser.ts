import { User } from "@models/classes";
import { useRootStore } from "./useRootStore";

export function useUser(): User {
	const userStore = useRootStore().userStore;
	if (!userStore) {
		throw new Error("User store must be initialized before accessing");
	}
	return userStore;
}
