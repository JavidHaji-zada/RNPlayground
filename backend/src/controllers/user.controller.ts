import { UnknownError } from "@customTypes/custom";
import { Language } from "@customTypes/localization";
import { UserService } from "@services/user.service";
import translate from "@utils/translation.util";
import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import authMiddledware from "middlewares/auth";

class UserController {
	router: Router;

	constructor() {
		this.router = express.Router();
		this.intializeRoutes();
	}

	// initialize all /user related routes here
	public intializeRoutes() {
		this.router.get("/", authMiddledware, asyncHandler(this.getUser));
		this.router.post("/", authMiddledware, asyncHandler(this.createUser));
	}

	getUser = async (request: express.Request, response: express.Response) => {
		try {
			const value = await UserService.getUserByFirebaseUID(
				(request.headers.firebaseUID as string) || "",
			);
			response.status(200).json({ message: value });
		} catch (e: unknown) {
			response.status(400).json({
				message: translate(
					request.headers.language as Language,
					(e as UnknownError).message,
				),
			});
		} finally {
			return;
		}
	};

	createUser = async (
		request: express.Request,
		response: express.Response,
	) => {
		try {
			const value = await UserService.createUser(request.body);
			response.status(200).json({ message: value });
		} catch (e: unknown) {
			response.status(400).json({ message: "error" });
		} finally {
			return;
		}
	};
}

export default UserController;
