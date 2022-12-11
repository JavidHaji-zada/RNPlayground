import React from "react";
import {
	NavigationContainer,
	NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNavigationParamList, AppNavigationStack } from "@customTypes/index";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useAuthListener } from "@hooks/global";
import { AuthStack } from "./auth";
import { HomeStack } from "./home";

const AppStack = createNativeStackNavigator<AppNavigationParamList>();

function RootNavigator(): JSX.Element {
	const navigationRef =
		React.useRef<NavigationContainerRef<AppNavigationParamList>>(null);

	const initialMount = React.useRef(true);

	const navigateToHome = () => {
		// reset current navigatio state to HomeStack
		navigationRef.current?.reset({
			index: 0,
			routes: [{ name: AppNavigationStack.HomeStack }],
		});
	};

	const navigateToLogin = () => {
		// reset current navigatio state to AuthStack
		navigationRef.current?.reset({
			index: 0,
			routes: [{ name: AppNavigationStack.AuthStack }],
		});
	};

	const onAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
		if (initialMount.current) {
			initialMount.current = false;
			return;
		}
		if (user) {
			navigateToHome();
		} else {
			console.log("there is no user");
			navigateToLogin();
		}
	};
	useAuthListener(onAuthStateChanged);

	return (
		<NavigationContainer ref={navigationRef}>
			<AppStack.Navigator screenOptions={{ headerShown: false }}>
				<AppStack.Screen
					name={AppNavigationStack.AuthStack}
					component={AuthStack}
				/>
				<AppStack.Screen
					name={AppNavigationStack.HomeStack}
					component={HomeStack}
				/>
			</AppStack.Navigator>
		</NavigationContainer>
	);
}

export default RootNavigator;
