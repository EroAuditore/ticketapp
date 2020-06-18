import { put, call, takeLatest, select } from "redux-saga/effects";

import {
  START_SAVE_MOVIMIENTO,
  SUCCESS_SAVE_MOVIMIENTO,
  ERROR_SAVE_MOVIMIENTO,
} from "../Actions/movimientos";
import apiCall from "./../api/index";
import {
  retornoSelector,
  depositoSelector,
  facturaSelector,
} from "./../Selectors/index";

//funcion generadora
export function* saveMovimiento({ payload }) {
  try {
    const retornos = yield select(retornoSelector);
    const depositos = yield select(depositoSelector);
    const facturas = yield select(facturaSelector);

    const movimientoObj = {
      movimiento: payload,
      depositos,
      retornos,
      facturas,
    };

    console.log("Guardando movimiento");
    console.log(movimientoObj);
    const result = yield call(
      apiCall,
      "/tickets/nuevo",
      movimientoObj,
      null,
      "POST"
    );
    yield put({ type: SUCCESS_SAVE_MOVIMIENTO, result });
  } catch (error) {
    yield put({ type: ERROR_SAVE_MOVIMIENTO, error });
  }
}

//Watcher
export default function* movimientos() {
  yield takeLatest(START_SAVE_MOVIMIENTO, saveMovimiento);
}
