import { get } from "lodash";

export const isDepositosLoading = (state) => get(state, "depositos.isLoading");
export const depositosResult = (state) => get(state, "depositos.data");

export const isTicketsLoading = (state) => get(state, "tickets.isLoading");
export const ticketsResult = (state) => get(state, "tickets.data");

export const facturaSelector = (state) => get(state, "movimientos.facturas");
export const depositoSelector = (state) => get(state, "movimientos.depositos");
export const retornoSelector = (state) => get(state, "movimientos.retornos");
