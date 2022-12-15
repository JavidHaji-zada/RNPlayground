import { User } from "@models/classes";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import axios from "./axios";
import { Config } from "@config/index";
import { FirebaseAuthError } from "@customTypes/firebase";
import localizedStrings from "@utils/localization";

const endpoint = `${Config.API_URL}/user`;

export class UserService {
	static async createUserWithEmailAndPassword(
		email: string,
		password: string,
		user: Pick<User, "firstName" | "lastName">,
	): Promise<User> {
		try {
			const externalUser =
				await this.createUserExternalWithEmailAndPassword(
					email,
					password,
				);
			const res = await axios.post(endpoint, {
				email,
				firebaseUID: externalUser.uid,
				...user,
			});
			return new User(res.data.message);
		} catch (error: unknown) {
			throw Error(
				(error as unknown as any)?.data?.message ||
					(error as unknown as any).message,
			);
		}
	}

	static async signInWithEmailAndPassword(
		email: string,
		password: string,
	): Promise<void> {
		try {
			await this.signinExternalWithEmailAndPassword(email, password);
		} catch (error: unknown) {
			throw Error(
				(error as unknown as any)?.data?.message ||
					(error as unknown as any).message,
			);
		}
	}

	static async getUser(): Promise<User> {
		try {
			const res = await axios.get(endpoint);
			return res.data.message;
		} catch (error: unknown) {
			throw Error(
				(error as unknown as any)?.data?.message ||
					(error as unknown as any).message,
			);
		}
	}

	private static async signinExternalWithEmailAndPassword(
		email: string,
		password: string,
	): Promise<FirebaseAuthTypes.User> {
		try {
			const res = await auth().signInWithEmailAndPassword(
				email,
				password,
			);
			return res.user;
		} catch (error) {
			throw Error(
				localizedStrings.errors.firebase[
					(error as unknown as any).code as FirebaseAuthError
				],
			);
		}
	}

	private static async createUserExternalWithEmailAndPassword(
		email: string,
		password: string,
	): Promise<FirebaseAuthTypes.User> {
		try {
			const res = await auth().createUserWithEmailAndPassword(
				email,
				password,
			);
			return res.user;
		} catch (error) {
			throw Error(
				localizedStrings.errors.firebase[
					(error as unknown as any).code as FirebaseAuthError
				],
			);
		}
	}
}
