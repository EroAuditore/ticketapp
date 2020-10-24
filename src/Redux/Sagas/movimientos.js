import {
  put,
  call,
  takeLatest,
  select,
  all,
  takeEvery,
} from "redux-saga/effects";

import {
  START_SAVE_MOVIMIENTO,
  SUCCESS_SAVE_MOVIMIENTO,
  ERROR_SAVE_MOVIMIENTO,
  ERROR_ATTEND_MOVIMIENTO,
  START_ATTEND_MOVIMIENTO,
  START_VM,
  SUCCESS_VM,
  ERROR_VM,
} from "../Actions/movimientos";
import apiCall from "./../api/index";
import {
  retornoSelector,
  depositoSelector,
  facturaSelector,
  comisionesSelector,
} from "./../Selectors/index";
import history from "./../../history";
import { SUCCESS_ATTEND_MOVIMIENTO } from "./../Actions/movimientos";
import { ERROR_AFAM } from "./../Actions/facturas";

//funcion generadora
export function* saveMovimiento({ payload }) {
  try {
    const retornos = yield select(retornoSelector);
    const depositos = yield select(depositoSelector);
    const comisiones = yield select(comisionesSelector);

    const data = new FormData();
    data.append("file", payload.Archivo[0]);

    delete payload.Archivo;
    const movimientoObj = {
      movimiento: payload,
      depositos,
      retornos,
      comisiones,
    };

    const json = JSON.stringify(movimientoObj);
    console.log("JsonString", json);
    const blob = new Blob([json], {
      type: "application/json",
    });
    data.append("movimientoObj", json);

    const result = yield call(
      apiCall,
      "/movimiento/nuevo",
      data,

      {
        Accept: "application/json",
        "content-type": "multipart/form-data",
      },
      "POST"
    );
    yield put({ type: SUCCESS_SAVE_MOVIMIENTO, result });
    yield call(redirectTo, "/tickets");
  } catch (error) {
    console.log(error);
    yield put({ type: ERROR_SAVE_MOVIMIENTO, error });
  }
}

export function* attendMovimiento({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "/movimiento/atender",
      payload,
      null,
      "POST"
    );

    yield put({ type: SUCCESS_ATTEND_MOVIMIENTO, result });
    yield call(redirectTo, "/tickets/atender");
  } catch (error) {
    console.log("error", error);
    yield put({ type: ERROR_ATTEND_MOVIMIENTO });
  }
}

export function* validaMovimiento({ payload }) {
  try {
    console.log("valida movimiento payload", payload);
    const result = yield call(
      apiCall,
      "/movimiento/validar",
      payload,
      null,
      "POST"
    );

    yield put({ type: SUCCESS_VM, payload });
    /*yield call(redirectTo, "/tickets/atender");*/
  } catch (error) {
    yield put({ type: ERROR_VM });
  }
}

//Watcher
export default function* movimientos() {
  yield all([
    yield takeEvery(START_SAVE_MOVIMIENTO, saveMovimiento),
    yield takeEvery(START_ATTEND_MOVIMIENTO, attendMovimiento),
    yield takeEvery(START_VM, validaMovimiento),
  ]);
}

function redirectTo(location) {
  console.log("location push:", location);
  history.push(location);
}
