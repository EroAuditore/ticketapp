import axios from 'axios';
import jwtDecode from 'jwt-decode';

const apiUrl = process.env.REACT_APP_APIURL;

export function getUsers() {
  return axios.get(`${apiUrl}/usuarios`);
}

export function saveUser(obj) {
  return axios.post(`${apiUrl}/usuario/nuevo`, obj);
}

export function editUser(obj) {
  return axios.post(`${apiUrl}/usuario/editar`, obj);
}

export function searchUser(obj) {
  return axios.post(`${apiUrl}/usuario/buscar`, obj);
}

export function getCurrentUserID() {
  const jwt = localStorage.getItem('token');
  const { data: userData } = jwtDecode(jwt);
  return userData._id;
}
