import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "./firebase-admin-sdk.json";

const setupFirebase = () => {
	admin.initializeApp({
		credential: admin.credential.cert(
			serviceAccount as unknown as ServiceAccount,
		),
	});
};
export const FirebaseConfig = { setupFirebase };
