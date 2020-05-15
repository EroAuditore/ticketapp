import { put, call, takeLatest, takeEvery, all } from "redux-saga/effects";
import {
  START_GET_TICKETS,
  SUCCESS_GET_TICKETS,
  ERROR_GET_TICKETS,
  START_FILTER_MOVIMIENTO,
  SUCCESS_FILTER_MOVIMIENTO,
  ERROR_FILTER_MOVIMIENTO,
} from "../Actions/tickets";
import { apiCall } from "./../api/index";

//funcion generadora
export function* getTickets({ payload }) {
  try {
    const result = yield call(apiCall, "/tickets", null, null, "GET");
    yield put({ type: SUCCESS_GET_TICKETS, result });
  } catch (error) {
    yield put({ type: ERROR_GET_TICKETS, error });
  }
}

export function* filterTickets({ payload }) {
  console.log("filter ticket saga");
  console.log(payload);
  try {
    const result = yield call(
      apiCall,
      "/tickets/filtrar",
      payload,
      null,
      "POST"
    );
    yield put({ type: SUCCESS_FILTER_MOVIMIENTO, result });
  } catch (error) {
    yield put({ type: ERROR_FILTER_MOVIMIENTO, error });
  }
}

//Watcher
export default function* tickets() {
  yield all([
    takeEvery(START_GET_TICKETS, getTickets),
    takeEvery(START_FILTER_MOVIMIENTO, filterTickets),
  ]);
}