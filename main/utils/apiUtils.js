import axios from "axios";
import { apiEndPoints } from "../configs/apiEndpoints";

export function* triggerAPIRequest(key, method, data = {}) {
	let entryPoint = "";
	let token = "";
	let options = {};
	if (apiEndPoints[key]) {
		entryPoint = `${siteURL}${apiEndPoints[key]}`;
		console.log("entryPoint => ", entryPoint);
		console.log("entryPoint => ", data);
		if (method === "GET") {
			options = {
				method,
				url: entryPoint,
				headers: {
					"Access-Control-Allow-Origin": "*",
					Accept: "application/json",
					"Content-Type": "application/json",
					token,
				},
			};
		} else {
			options = {
				method,
				data,
				url: entryPoint,
				headers: {
					"Access-Control-Allow-Origin": "*",
					Accept: "application/json",
					"Content-Type": "application/json",
					token,
				},
			};
		}
		const response = yield axios(options)
			.then((response) => response)
			.catch((err) => err);
		console.log("response received", response);
		return response;
	}
	return null;
}

export default triggerAPIRequest;
