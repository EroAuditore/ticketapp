import axios from "axios";
const endPoint = "http://localhost:8080/ticketapi/api/";

export function getTicketsAPI() {
  return axios.get(endPoint + "tickets");
}

export function getTicket(id) {
  return axios.get(endPoint + "tickets/" + id);
}

export function saveTicket(ticket) {
  return axios.post(endPoint + "tickets/nuevo", ticket);
}
