import { put, call, takeLatest } from "redux-saga/effects";
import {
  START_GET_DEPOSITOS,
  SUCCESS_GET_DEPOSITOS,
  ERROR_GET_DEPOSITOS
} from "../Actions/depositos";
import { apiCall } from "./../api/index";

//funcion generadora
export function* getDepositos({ payload }) {
  try {
    const result = yield call(apiCall, "/depositos", null, null, "GET");
    yield put({ type: SUCCESS_GET_DEPOSITOS, result });
  } catch (error) {
    yield put({ type: ERROR_GET_DEPOSITOS, error });
  }
}

//Watcher
export default function* depositos() {
  yield takeLatest(START_GET_DEPOSITOS, getDepositos);
}
