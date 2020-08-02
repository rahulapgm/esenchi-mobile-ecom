import axios from "axios";
import { apiEndPoints } from "../configs/apiEndpoints";

export const siteURL = "https://sanchi-server-app.herokuapp.com";

export function* triggerAPIRequest(key, method = "GET", data = {}) {
  let entryPoint = "";
  let token = "";
  let options = {};
  data.customerPh = "+919633882121";
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
          token
        }
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
          token
        }
      };
    }
    const response = yield axios(options);
    return response;
  }
  return null;
}

export default triggerAPIRequest;
