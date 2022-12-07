/* eslint-disable no-shadow */
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export enum AuthStackScreen {
	Login = "Login",
}

export type AuthStackParamList = {
	[AuthStackScreen.Login]: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
