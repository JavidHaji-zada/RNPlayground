import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	AppNavigationParamList,
	AppNavigationProp,
	AppNavigationStack,
	AuthStackScreen,
	HomeStackScreen,
} from "@customTypes/index";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useAuthListener } from "@hooks/global";
import { AuthStack } from "./auth";
import { HomeStack } from "./home";
import { NavigationService } from "@utils/navigation";
import { UserService } from "@services/user-service";
import { useNavigation } from "@react-navigation/native";
import { useRootStore } from "@hooks/store";
import { RootStore } from "@state/RootStore";
import { User } from "@models/classes";

const AppStack = createNativeStackNavigator<AppNavigationParamList>();

function RootNavigator(): JSX.Element {
	const navigation = useNavigation<AppNavigationProp>();
	const rootStore: RootStore = useRootStore();
	// const navigationRef =
	// 	React.useRef<NavigationContainerRef<AppNavigationParamList>>(null);

	// setup NavigationService
	React.useEffect(() => {
		if (navigation) {
			console.log("update navigator");
			NavigationService.setNavigator(navigation);
		}
	}, [navigation]);

	const initialMount = React.useRef(true);

	// handle auth state change
	const onAuthStateChanged = async (
		firebaseUser: FirebaseAuthTypes.User | null,
	) => {
		// ignore trigger on app initial start up
		if (initialMount.current) {
			initialMount.current = false;
			return;
		}
		try {
			if (firebaseUser) {
				// fetch user info and navigate to Home
				const user = await UserService.getUser();
				rootStore.userStore.updateFromJson(user);
				// LocalState.setUser(user);
				NavigationService.navigateTo(
					AppNavigationStack.HomeStack,
					HomeStackScreen.Home,
				);
			} else {
				// user logged out, navigate to Login
				rootStore.userStore.updateFromJson(User.template);
				NavigationService.navigateTo(
					AppNavigationStack.AuthStack,
					AuthStackScreen.Login,
				);
			}
		} catch (error) {
			// ignore
		}
	};
	useAuthListener(onAuthStateChanged);

	return (
		<AppStack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={AppNavigationStack.HomeStack}>
			<AppStack.Screen
				name={AppNavigationStack.AuthStack}
				component={AuthStack}
			/>
			<AppStack.Screen
				name={AppNavigationStack.HomeStack}
				component={HomeStack}
			/>
		</AppStack.Navigator>
	);
}

export default RootNavigator;
