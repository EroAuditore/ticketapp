import axios from "axios";
import { apiUrl, filesUrl } from "../config.json";
const apiEndpoint = apiUrl + "/auth";

export function login(username, password) {
  return axios.post(apiEndpoint, { username, password });
}

export function fileURL() {
  return process.env.REACT_APP_FILESURL;
}
