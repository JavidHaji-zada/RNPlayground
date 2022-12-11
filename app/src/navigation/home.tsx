import { HomeStackParamList, HomeStackScreen } from "@customTypes/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@screens/Home";
import React from "react";

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();

export function HomeStack(): JSX.Element {
	return (
		<HomeStackNavigator.Navigator>
			<HomeStackNavigator.Screen
				name={HomeStackScreen.Home}
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
		</HomeStackNavigator.Navigator>
	);
}
