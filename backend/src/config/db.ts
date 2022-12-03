import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
//set up mongoDB connection
const DB_URL = process.env.MONGODB_URL || "";

const setupDBConnection = async () => {
	try {
		await mongoose.connect(DB_URL);
		console.log("mongoose connected");
	} catch (error) {
		throw error;
	}
};

export const DBConfig = { setupDBConnection };
