import React from "react";

export enum AuthType {
	Login = "login",
	Register = "register",
}

interface LoginFormHandler {
	email: string;
	password: string;
	otp: string;
	firstName: string;
	lastName: string;
	error: string;
	authType: AuthType;
	login: () => void;
	setOTP: React.Dispatch<string>;
	setEmail: React.Dispatch<string>;
	setPassword: React.Dispatch<string>;
	setFirstName: React.Dispatch<string>;
	setLastName: React.Dispatch<string>;
	setAuthType: React.Dispatch<AuthType>;
}

export function useLogin(): LoginFormHandler {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [otp, setOTP] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [error, setError] = React.useState("");
	const [authType, setAuthType] = React.useState<AuthType>(AuthType.Login);

	const login = async () => {
		// check if user exists
		// complete sign in if exists
		// show firstname and lastname
		// request otp
		// complete register & login
	};

	return {
		email,
		password,
		otp,
		firstName,
		lastName,
		error,
		authType,
		setEmail,
		setPassword,
		setOTP,
		login,
		setFirstName,
		setLastName,
		setAuthType,
	};
}
