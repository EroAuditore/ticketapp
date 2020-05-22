import axios from "axios";
import { apiUrl } from "../config.json";

export function getUsers() {
  return axios.get(apiUrl + "/usuarios");
}

export function saveUser(obj) {
  console.log(obj);
  return axios.post(apiUrl + "/usuario/nuevo", obj);
}

export function editUser(obj) {
  console.log(obj);
  return axios.post(apiUrl + "/usuario/editar", obj);
}

export function searchUser(obj) {
  console.log(obj);
  return axios.post(apiUrl + "/usuario/buscar", obj);
}
