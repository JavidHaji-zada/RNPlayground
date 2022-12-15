import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Auth Stack
export enum AuthStackScreen {
	Login = "Login",
}

export type AuthStackParamList = {
	[AuthStackScreen.Login]: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
// Home Stack
export enum HomeStackScreen {
	Home = "Home",
}

export type HomeStackParamList = {
	[HomeStackScreen.Home]: undefined;
};
export type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

// App Stack
export enum AppNavigationStack {
	AuthStack = "AuthStack",
	HomeStack = "HomeStack",
}
export type AppNavigationParamList = {
	[AppNavigationStack.AuthStack]: NavigatorScreenParams<AuthStackParamList>;
	[AppNavigationStack.HomeStack]: NavigatorScreenParams<HomeStackParamList>;
};

export type AppNavigationProp =
	NativeStackNavigationProp<AppNavigationParamList>;

export type AppScreen = HomeStackScreen | AuthStackScreen;
