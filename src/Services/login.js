import axios from "axios";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/auth";

export function login(username, password) {
  return axios.post(apiEndpoint, { username, password });
}
