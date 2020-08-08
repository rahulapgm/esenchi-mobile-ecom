import axios from "axios";
import {AsyncStorage} from 'react-native';
import { apiEndPoints } from "../configs/apiEndpoints";

export const siteURL = "https://sanchi-server-app.herokuapp.com";

export function* triggerAPIRequest(key, method = "GET", data = {}) {
  let entryPoint = "";

  let token = yield AsyncStorage.getItem('userToken');

  if(!data.customerPh){
    data.customerPh = yield AsyncStorage.getItem('userPhoneNumber');
  }

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
          "access-token": token
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
          "access-token": token
        }
      };
    }
    const response = yield axios(options);
    return response;
  }
  return null;
}

export default triggerAPIRequest;
