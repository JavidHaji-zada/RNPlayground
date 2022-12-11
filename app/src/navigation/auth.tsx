import { AuthStackParamList, AuthStackScreen } from "@customTypes/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/Login";
import React from "react";

const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack(): JSX.Element {
	return (
		<AuthStackNavigator.Navigator>
			<AuthStackNavigator.Screen
				name={AuthStackScreen.Login}
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
		</AuthStackNavigator.Navigator>
	);
}
