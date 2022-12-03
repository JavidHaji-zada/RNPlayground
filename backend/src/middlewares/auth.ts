import admin from "firebase-admin";
import { Request, Response, NextFunction } from "express";
import translate from "@utils/translation.util";
import { Language } from "@customTypes/localization";

const authMiddledware = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const token = req.header("Authorization");

	if (!token) {
		return res.status(401).json({
			message: translate(
				req.headers.language as Language,
				"token_not_found",
			),
		});
	}

	try {
		await admin.auth().verifyIdToken(token);
		return next();
	} catch (error) {
		return res.status(500).send({ message: error, token: "Token invalid" });
	}
};

export default authMiddledware;
