import {
  put,
  call,
  select,
  all,
  takeEvery,
} from 'redux-saga/effects';

import {
  START_SAVE_MOVIMIENTO,
  SUCCESS_SAVE_MOVIMIENTO,
  ERROR_SAVE_MOVIMIENTO,
  ERROR_ATTEND_MOVIMIENTO,
  START_ATTEND_MOVIMIENTO,
  START_VM,
  SUCCESS_VM,
  ERROR_VM,
  SUCCESS_FSC,
  START_FSC,
  ERROR_FSC,
  SUCCESS_ATTEND_MOVIMIENTO,
} from '../Actions/movimientos';
import apiCall from '../api/index';
import {
  retornoSelector,
  depositoSelector,
  comisionesSelector,
} from '../Selectors/index';
import history from '../../history';

// funcion generadora
/* eslint-disable no-param-reassign, no-use-before-define */
export function* saveMovimiento({ payload }) {
  try {
    const retornos = yield select(retornoSelector);
    const depositos = yield select(depositoSelector);
    const comisiones = yield select(comisionesSelector);

    const data = new FormData();
    data.append('file', payload.Archivo[0]);

    delete payload.Archivo;
    const movimientoObj = {
      movimiento: payload,
      depositos,
      retornos,
      comisiones,
    };

    const json = JSON.stringify(movimientoObj);

    data.append('movimientoObj', json);

    const result = yield call(
      apiCall,
      '/movimiento/nuevo',
      data,

      {
        Accept: 'application/json',
        'content-type': 'multipart/form-data',
      },
      'POST',
    );
    yield put({ type: SUCCESS_SAVE_MOVIMIENTO, result });
    yield call(redirectTo, '/tickets');
  } catch (error) {
    yield put({ type: ERROR_SAVE_MOVIMIENTO, error });
  }
}

export function* attendMovimiento({ payload }) {
  try {
    const result = yield call(
      apiCall,
      '/movimiento/atender',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_ATTEND_MOVIMIENTO, result });
    yield call(redirectTo, '/tickets/atender');
  } catch (error) {
    yield put({ type: ERROR_ATTEND_MOVIMIENTO });
  }
}
/* eslint-enable no-param-reassign, no-use-before-define */

export function* validaMovimiento({ payload }) {
  try {
    yield call(
      apiCall,
      '/movimiento/validar',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_VM, payload });
  } catch (error) {
    yield put({ type: ERROR_VM });
  }
}

// Facturas de una Solicitud de un Cliente
export function* startFSC({ payload }) {
  try {
    const result = yield call(
      apiCall,
      '/facturas/solicitud',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_FSC, result });
  } catch (error) {
    yield put({ type: ERROR_FSC });
  }
}

// Watcher
export default function* movimientos() {
  yield all([
    yield takeEvery(START_SAVE_MOVIMIENTO, saveMovimiento),
    yield takeEvery(START_ATTEND_MOVIMIENTO, attendMovimiento),
    yield takeEvery(START_VM, validaMovimiento),
    yield takeEvery(START_FSC, startFSC),
  ]);
}

function redirectTo(location) {
  history.push(location);
}
