import express, { Router } from "express";
import { ROUTES } from "../types";
import UserController from "@controllers/user.controller";

const router: Router = express.Router();
router.use(ROUTES.USER, new UserController().router);
export default router;
