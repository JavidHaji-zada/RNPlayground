import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./src/routes/routes";
import { Config } from "./src/config";

dotenv.config();
// DB config
Config.DBConfig.setupDBConnection();
// firebase config
Config.FirebaseConfig.setupFirebase();

const app: Express = express();
const port = process.env.PORT;

// parse body
app.use(express.json());
app.use("", routes);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
