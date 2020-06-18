import {
  START_GET_FACTURAS,
  SUCCESS_GET_FACTURAS,
  ERROR_GET_FACTURAS,
  START_ATTEND_FACTURAS,
  SUCCESS_ATTEND_FACTURAS,
  ERROR_ATTEND_FACTURAS,
  START_EDIT_FACTURA,
  SUCCESS_EDIT_FACTURA,
  ERROR_EDIT_FACTURA,
} from "./../Actions/facturas";

import { put, call, takeEvery, all } from "redux-saga/effects";

import history from "./../../history";

import apiCall from "./../api/index";

//funcion generadora
export function* getFacturas({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "/facturas/movimientos",
      null,
      null,
      "GET"
    );
    yield put({ type: SUCCESS_GET_FACTURAS, result });
  } catch (error) {
    yield put({ type: ERROR_GET_FACTURAS, error });
  }
}

export function* attendFacturas({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "/movimiento/facturas/tomar",
      payload,
      null,
      "POST"
    );

    yield put({ type: SUCCESS_ATTEND_FACTURAS, result });
    yield call(redirectTo, "/tickets/nuevo");
  } catch (error) {
    yield put({ type: ERROR_ATTEND_FACTURAS });
  }
}

export function* updateFactura({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "/facturas/editar",
      payload,
      null,
      "POST"
    );

    yield put({ type: SUCCESS_EDIT_FACTURA, payload });
  } catch (error) {
    yield put({ type: ERROR_EDIT_FACTURA });
  }
}

//Watcher

export default function* facturas() {
  yield all([
    takeEvery(START_GET_FACTURAS, getFacturas),
    takeEvery(START_ATTEND_FACTURAS, attendFacturas),
    takeEvery(START_EDIT_FACTURA, updateFactura),
  ]);
}

function redirectTo(location) {
  history.push("/facturas/atender");
}
