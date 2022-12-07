import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, AuthStackScreen } from "@customTypes/index";
import LoginPage from "@screens/Login";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function RootNavigator(): JSX.Element {
	return (
		<NavigationContainer>
			<AuthStack.Navigator>
				<AuthStack.Screen
					name={AuthStackScreen.Login}
					component={LoginPage}
					options={{ headerShown: false }}
				/>
			</AuthStack.Navigator>
		</NavigationContainer>
	);
}

export default RootNavigator;
