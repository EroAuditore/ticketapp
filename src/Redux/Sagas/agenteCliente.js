import { put, call, takeEvery, all, select } from "redux-saga/effects";

import history from "./../../history";

import apiCall from "./../api/index";

import {
  START_AGENTES,
  START_CLIENTES,
  GET_CLIENTES,
  ERROR_CLIENTES,
  GET_AGENTES,
  ERROR_AGENTES,
  GET_SOLICITUD,
  START_SOLICITUD,
  ERROR_SOLICITUD,
  START_FILTER_CLIENTE,
  SUCCESS_FILTER_CLIENTE,
  ERROR_FILTER_CLIENTE,
  START_NA,
  START_NC,
  SUCCESS_NA,
  SUCCESS_NC,
  ERROR_NA,
  ERROR_NC,
  SUCCESS_AC,
  START_AC,
  ERROR_AC,
} from "../Actions/agenteCliente";

export function* getAgentes({ payload }) {
  try {
    const result = yield call(apiCall, "/listado/agente", null, null, "GET");
    yield put({ type: GET_AGENTES, result });
  } catch (error) {
    yield put({ type: ERROR_AGENTES, error });
  }
}

export function* getClientes({ payload }) {
  try {
    const result = yield call(apiCall, "/filtro/agente", payload, null, "POST");
    yield put({ type: GET_CLIENTES, result });
  } catch (error) {
    yield put({ type: ERROR_CLIENTES, error });
  }
}

export function* getSolicitud({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "/facturas/filtrar",
      payload,
      null,
      "POST"
    );
    yield put({ type: GET_SOLICITUD, result });
  } catch (error) {
    yield put({ type: ERROR_SOLICITUD, error });
  }
}

export function* getCliente({ payload }) {
  console.log("getCliente ", payload);
  try {
    const result = yield call(
      apiCall,
      "/cliente/filtrar",
      payload,
      null,
      "POST"
    );
    yield put({ type: SUCCESS_FILTER_CLIENTE, result });
  } catch (error) {
    yield put({ type: ERROR_FILTER_CLIENTE, error });
  }
}

export function* getAClientes({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "/clientes/todos",
      payload,
      null,
      "POST"
    );
    yield put({ type: SUCCESS_AC, result });
  } catch (error) {
    yield put({ type: ERROR_AC, error });
  }
}

export function* startNA({ payload }) {
  try {
    const result = yield call(apiCall, "/agente/nuevo", payload, null, "POST");

    yield put({ type: SUCCESS_NA, result });
  } catch (error) {
    yield put({ type: ERROR_NA });
  }
}

export function* startNC({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "/clientes/nuevo",
      payload,
      null,
      "POST"
    );

    yield put({ type: SUCCESS_NC, result });
  } catch (error) {
    yield put({ type: ERROR_NC });
  }
}
//WATCHER
export default function* agenteClientes() {
  yield all([
    takeEvery(START_AGENTES, getAgentes),
    takeEvery(START_CLIENTES, getClientes),
    takeEvery(START_SOLICITUD, getSolicitud),
    takeEvery(START_FILTER_CLIENTE, getCliente),
    takeEvery(START_NA, startNA),
    takeEvery(START_AC, getAClientes) /*TODOS LOS CLIENTES **/,
    takeEvery(START_NC, startNC),
  ]);
}
