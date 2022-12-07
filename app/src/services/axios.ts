import axios, { AxiosRequestConfig } from "axios";
import auth from "@react-native-firebase/auth";

// Add a request interceptor
const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
	async (config: AxiosRequestConfig) => {
		const idToken = await auth().currentUser?.getIdToken();
		if (config.headers) {
			config.headers["Content-Type"] = "application/json";
			if (idToken) {
				config.headers.Authorization = idToken;
			}
		}
		return config;
	},
	function () {
		// todo: do something with request error
	},
);

export default AxiosInstance;
