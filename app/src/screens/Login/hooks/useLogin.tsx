import React from "react";
import { UserService } from "@services/index";
import localizedStrings from "@utils/localization";
import { QueryStatus } from "@customTypes/index";

export enum AuthType {
	Login = "login",
	Register = "register",
}

enum LoginFormField {
	Email = "email",
	Password = "password",
	FirstName = "firstName",
	LastName = "lastName",
}

export type LoginFormError = {
	field: LoginFormField | null;
	message: string;
};

interface LoginFormHandler {
	email: string;
	password: string;
	otp: string;
	firstName: string;
	lastName: string;
	error: LoginFormError | null;
	authType: AuthType;
	queryStatus: QueryStatus;
	submit: () => void;
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
	const [error, setError] = React.useState<LoginFormError | null>(null);
	const [authType, setAuthType] = React.useState<AuthType>(AuthType.Login);
	const [queryStatus, setQueryStatus] = React.useState<QueryStatus>(
		QueryStatus.IDLE,
	);

	// clear error if it was related to a field
	React.useEffect(() => {
		if (error?.field === LoginFormField.Email) {
			setError(null);
		}
	}, [email]);

	React.useEffect(() => {
		if (error?.field === LoginFormField.Password) {
			setError(null);
		}
	}, [password]);

	React.useEffect(() => {
		if (error?.field === LoginFormField.FirstName) {
			setError(null);
		}
	}, [firstName]);

	React.useEffect(() => {
		if (error?.field === LoginFormField.LastName) {
			setError(null);
		}
	}, [lastName]);

	// validate form fields, returns true if all are ok
	const validateInputs = () => {
		let err = "";
		let field = LoginFormField.Email;
		if (!email) {
			err = localizedStrings.screens.login.error["email-required"];
			field = LoginFormField.Email;
		} else if (!password) {
			err = localizedStrings.screens.login.error["password-required"];
			field = LoginFormField.Password;
		} else if (!firstName && authType === AuthType.Register) {
			err = localizedStrings.screens.login.error["first-name-required"];
			field = LoginFormField.FirstName;
		} else if (!lastName && authType === AuthType.Register) {
			err = localizedStrings.screens.login.error["last-name-required"];
			field = LoginFormField.LastName;
		}
		if (err) {
			setError({ message: err, field });
		}
		return !err;
	};

	const login = async () => {
		try {
			setQueryStatus(QueryStatus.LOADING);
			await UserService.signInWithEmailAndPassword(email, password);
			setQueryStatus(QueryStatus.SUCCESS);
		} catch (err) {
			setError({
				field: null,
				message: (err as unknown as any)?.message,
			});
			setQueryStatus(QueryStatus.FAILED);
		} finally {
			setTimeout(() => {
				setQueryStatus(QueryStatus.IDLE);
			}, 1500);
		}
	};

	const register = async () => {
		try {
			setQueryStatus(QueryStatus.LOADING);
			await UserService.createUserWithEmailAndPassword(email, password, {
				firstName,
				lastName,
			});
			setQueryStatus(QueryStatus.SUCCESS);
		} catch (err) {
			setError({
				field: null,
				message: (err as unknown as any)?.message,
			});
			setQueryStatus(QueryStatus.FAILED);
		} finally {
			setTimeout(() => {
				setQueryStatus(QueryStatus.IDLE);
			}, 1500);
		}
	};

	const submit = () => {
		if (validateInputs()) {
			authType === AuthType.Login ? login() : register();
		}
	};

	return {
		email,
		password,
		otp,
		firstName,
		lastName,
		error,
		authType,
		queryStatus,
		setEmail,
		setPassword,
		setOTP,
		submit,
		setFirstName,
		setLastName,
		setAuthType,
	};
}
