import React from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

export function useAuthListener(
	onAuthStateChanged: (user: FirebaseAuthTypes.User | null) => unknown,
) {
	React.useEffect(() => {
		console.log("listen");
		const listener = listen();
		return () => listener();
	}, []);

	const listen = () => {
		return auth().onAuthStateChanged(onAuthStateChanged);
	};
}
