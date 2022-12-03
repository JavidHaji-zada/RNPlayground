import { AuthToken } from "@entities/auth-token";
import mongoose from "mongoose";
import { DBTable } from "../types";

export type UserDocument = mongoose.Document & {
	email: string;
	firebaseUID: string;
	tokens: AuthToken[];
	firstName: string;
	lastName: string;
};

const UserSchema = new mongoose.Schema<UserDocument>(
	{
		email: { type: String, unique: true },
		tokens: Array,
		firstName: String,
		lastName: String,
	},
	{ timestamps: true },
);

export const UserModel = mongoose.model<UserDocument>(DBTable.User, UserSchema);
