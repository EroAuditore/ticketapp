import {
  put, call, takeEvery, all, select,
} from 'redux-saga/effects';
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
  START_SAVE_FACTURAS,
  ERROR_SAVE_FACTURAS,
  SUCCESS_SAVE_FACTURAS,
  START_GET_SOLICITUDES,
  SUCCESS_GET_SOLICITUDES,
  ERROR_GET_SOLICITUDES,
  START_FILTER_SOLICITUDES,
  SUCCESS_FILTER_SOLICITUDES,
  ERROR_FILTER_SOLICITUDES,
  SUCCESS_UPLOAD_XML,
  ERROR_UPLOAD_XML,
  START_UPLOAD_XML,
  SUCCESS_UPLOAD_PDF,
  ERROR_UPLOAD_PDF,
  START_UPLOAD_PDF,
  START_GEN_FACTURA,
  SUCCESS_GEN_FACTURA,
  ERROR_GEN_FACTURA,
  ERROR_GET_MOVIMIENTOP,
  START_GET_MOVIMIENTOP,
  SUCCESS_GET_MOVIMIENTOP,
  SUCCESS_AFAM,
  START_AFAM,
  ERROR_AFAM,
  SUCCESS_VXML,
  ERROR_VXML,
  START_VXML,
} from '../Actions/facturas';
import { facturaSelector, facturaGenSelector } from '../Selectors/index';

import history from '../../history';

import apiCall from '../api/index';

// funcion generadora
/* eslint-disable no-param-reassign, no-use-before-define */
export function* getFacturas() {
  try {
    const result = yield call(
      apiCall,
      '/facturas/movimientos',
      null,
      null,
      'GET',
    );
    yield put({ type: SUCCESS_GET_FACTURAS, result });
  } catch (error) {
    yield put({ type: ERROR_GET_FACTURAS, error });
  }
}

export function* getSolicitudes() {
  try {
    const result = yield call(
      apiCall,
      '/facturas/solicitudes',
      null,
      null,
      'GET',
    );
    yield put({ type: SUCCESS_GET_SOLICITUDES, result });
  } catch (error) {
    yield put({ type: ERROR_GET_SOLICITUDES, error });
  }
}

export function* attendFacturas({ payload }) {
  try {
    const result = yield call(
      apiCall,
      '/movimiento/facturas/tomar',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_ATTEND_FACTURAS, result });
    yield call(redirectTo, '/facturas/atender');
  } catch (error) {
    yield put({ type: ERROR_ATTEND_FACTURAS });
  }
}

export function* genFactura({ payload }) {
  try {
    const result = yield call(
      apiCall,
      '/factura/generar',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_GEN_FACTURA, result });
    yield call(redirectTo, '/factura/generar');
  } catch (error) {
    yield put({ type: ERROR_GEN_FACTURA });
  }
}

export function* updateFactura({ payload }) {
  try {
    yield call(
      apiCall,
      '/facturas/editar',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_EDIT_FACTURA, payload });
  } catch (error) {
    yield put({ type: ERROR_EDIT_FACTURA });
  }
}

export function* saveSolFactura({ payload }) {
  const facturas = yield select(facturaSelector);

  const solicitudObj = {
    solicitud: payload,
    facturas,
  };

  const data = new FormData();
  data.append('file', payload.Archivo[0]);
  delete payload.Archivo;

  const json = JSON.stringify(solicitudObj);

  data.append('solicitudObj', json);

  try {
    const result = yield call(
      apiCall,
      '/solicitud/guardar',
      data,
      null,
      'POST',
    );
    yield put({ type: SUCCESS_SAVE_FACTURAS, result });
    yield call(redirectTo, '/facturas/solicitud');
  } catch (error) {
    yield put({ type: ERROR_SAVE_FACTURAS, error });
  }
}

export function* filterSolicitud({ payload }) {
  try {
    const result = yield call(
      apiCall,
      '/facturas/filtrar',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_FILTER_SOLICITUDES, result });
  } catch (error) {
    yield put({ type: ERROR_FILTER_SOLICITUDES });
  }
}

export function* uploadFacturaXML({ payload }) {
  const data = new FormData();
  data.append('file', payload.Archivo[0]);
  delete payload.Archivo;

  const json = JSON.stringify(payload);

  data.append('solicitudObj', json);
  try {
    const result = yield call(apiCall, '/factura/xml', data, null, 'POST');
    yield put({ type: SUCCESS_UPLOAD_XML, result });
  } catch (error) {
    yield put({ type: ERROR_UPLOAD_XML, error });
  }
}

export function* uploadVXML({ payload }) {
  const data = new FormData();
  data.append('file', payload.Archivo[0]);
  delete payload.Archivo;

  const json = JSON.stringify(payload);

  data.append('solicitudObj', json);
  try {
    const result = yield call(apiCall, '/factura/xml/test', data, null, 'POST');
    yield put({ type: SUCCESS_VXML, result });
    /* yield call(redirectTo, "/facturas/solicitud"); */
  } catch (error) {
    yield put({ type: ERROR_VXML, error });
  }
}

export function* uploadFacturaPDF({ payload }) {
  const data = new FormData();
  data.append('file', payload.Archivo[0]);
  delete payload.Archivo;

  const json = JSON.stringify(payload);

  data.append('solicitudObj', json);
  try {
    const result = yield call(apiCall, '/factura/pdf', data, null, 'POST');
    yield put({ type: SUCCESS_UPLOAD_PDF, result });
    /* yield call(redirectTo, "/facturas/solicitud"); */
  } catch (error) {
    yield put({ type: ERROR_UPLOAD_PDF, error });
  }
}

/** **********************Movimientos pendientes de facturar ********************** */

export function* getMovimientoP({ payload }) {
  try {
    const result = yield call(
      apiCall,
      '/movimientos/pendientes/facturar',
      payload,
      null,
      'POST',
    );

    yield put({ type: SUCCESS_GET_MOVIMIENTOP, result });
    yield call(redirectTo, '/factura/generar');
  } catch (error) {
    yield put({ type: ERROR_GET_MOVIMIENTOP });
  }
}

export function* AFAM({ payload }) {
  try {
    const factura = yield select(facturaGenSelector);
    const data = { ...factura, idMovimiento: payload._id };

    const result = yield call(
      apiCall,
      '/factura/movimiento/asignar',
      data,
      null,
      'POST',
    );
    yield put({ type: SUCCESS_AFAM, result });
  } catch (error) {
    yield put({ type: ERROR_AFAM, error });
  }
}
/* eslint-disable no-param-reassign, no-use-before-define */
// Watcher

export default function* facturas() {
  yield all([
    takeEvery(START_GET_FACTURAS, getFacturas),
    takeEvery(START_ATTEND_FACTURAS, attendFacturas),
    takeEvery(START_EDIT_FACTURA, updateFactura),
    takeEvery(START_SAVE_FACTURAS, saveSolFactura),
    takeEvery(START_GET_SOLICITUDES, getSolicitudes),
    takeEvery(START_FILTER_SOLICITUDES, filterSolicitud),
    takeEvery(START_UPLOAD_XML, uploadFacturaXML),
    takeEvery(START_UPLOAD_PDF, uploadFacturaPDF),
    takeEvery(START_GEN_FACTURA, genFactura),
    takeEvery(START_GET_MOVIMIENTOP, getMovimientoP),
    takeEvery(START_AFAM, AFAM),
    takeEvery(START_VXML, uploadVXML),
  ]);
}

function redirectTo(location) {
  history.push(location);
}
