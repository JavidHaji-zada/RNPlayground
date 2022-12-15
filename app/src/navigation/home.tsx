import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList, HomeStackScreen } from "@customTypes/navigation";
import { HomeScreen } from "@screens/Home";

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();

export function HomeStack(): JSX.Element {
	return (
		<HomeStackNavigator.Navigator initialRouteName={HomeStackScreen.Home}>
			<HomeStackNavigator.Screen
				name={HomeStackScreen.Home}
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
		</HomeStackNavigator.Navigator>
	);
}
