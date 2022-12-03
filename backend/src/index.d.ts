import { Language } from "./types";

declare module "http" {
	interface IncomingHttpHeaders {
		language: Language;
		firebaseUID?: string; // it is not required as part of request header. it is added inside the auth middleware
	}
}
