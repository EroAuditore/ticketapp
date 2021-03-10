export const ADD_FACTURA = 'ADD_FACTURA';
export const DELETE_FACTURA = 'DELETE_FACTURA';
export const ADD_DEPOSITO = 'ADD_DEPOSITO';
export const DELETE_DEPOSITO = 'DELETE_DEPOSITO';
export const ADD_RETORNO = 'ADD_RETORNO';
export const DELETE_RETORNO = 'DELETE_RETORNO';
export const ADD_COMISION = 'ADD_COMISION';
export const DELETE_COMISION = 'DELETE_COMISION';

export const START_SAVE_MOVIMIENTO = 'START_SAVE_MOVIMIENTO';
export const SUCCESS_SAVE_MOVIMIENTO = 'SUCCESS_SAVE_MOVIMIENTO';
export const ERROR_SAVE_MOVIMIENTO = 'ERROR_SAVE_MOVIMIENTO';

export const START_ATTEND_MOVIMIENTO = 'START_ATTEND_MOVIMIENTO';
export const SUCCESS_ATTEND_MOVIMIENTO = 'SUCCESS_ATTEND_MOVIMIENTO';
export const ERROR_ATTEND_MOVIMIENTO = 'ERROR_ATTEND_MOVIMIENTO';

export const NUEVO_MOVIMIENTO = 'NUEVO_MOVIMIENTO';

/** *validar movimiento */
export const START_VM = 'START_VM';
export const SUCCESS_VM = 'SUCCESS_VM';
export const ERROR_VM = 'ERROR_VM';

export const START_PROCESS = 'START_PROCESS';
export const END_PROCESS = 'END_PROCESS';

/** ************* FACTURAS DE UNA SOLICITUD DE UN CLIENTE************************ */

export const START_FSC = 'START_FSC';
export const SUCCESS_FSC = 'SUCCESS_FSC';
export const ERROR_FSC = 'ERROR_FSC';

export const startFSC = payload => ({
  type: START_FSC,
  payload,
});

export const successFSC = payload => ({
  type: SUCCESS_FSC,
  payload,
});

/** ********************** END FSC  ************************************* */

export const errorFSC = payload => ({
  type: ERROR_FSC,
  payload,
});

export const addFactura = payload => ({
  type: ADD_FACTURA,
  payload,
});

export const deleteFactura = payload => ({
  type: DELETE_FACTURA,
  payload,
});

export const addDeposito = payload => ({
  type: ADD_DEPOSITO,
  payload,
});

export const deleteDeposito = payload => ({
  type: DELETE_DEPOSITO,
  payload,
});

export const addRetorno = payload => ({
  type: ADD_RETORNO,
  payload,
});

export const deleteRetorno = payload => ({
  type: DELETE_RETORNO,
  payload,
});

export const nuevoMovimiento = payload => ({
  type: NUEVO_MOVIMIENTO,
  payload,
});

export const startSaveMovimiento = payload => ({
  type: START_SAVE_MOVIMIENTO,
  payload,
});

export const successSaveMovimiento = payload => ({
  type: SUCCESS_SAVE_MOVIMIENTO,
  payload,
});

export const errorSaveMovimiento = payload => ({
  type: ERROR_SAVE_MOVIMIENTO,
  payload,
});

export const addComision = payload => ({
  type: ADD_COMISION,
  payload,
});

export const deleteComision = payload => ({
  type: DELETE_COMISION,
  payload,
});

/** ***Atencion de ticket/movimiento *********** */

export const startAttendMovimiento = payload => ({
  type: START_ATTEND_MOVIMIENTO,
  payload,
});

export const successAttendMovimiento = payload => ({
  type: SUCCESS_ATTEND_MOVIMIENTO,
  payload,
});

export const errorAttendMovimiento = payload => ({
  type: ERROR_ATTEND_MOVIMIENTO,
  payload,
});

/** *** VALIDAR MOVIMIENTO *********** */

export const startVM = payload => ({
  type: START_VM,
  payload,
});

export const successVM = payload => ({
  type: SUCCESS_VM,
  payload,
});

export const errorVM = payload => ({
  type: ERROR_VM,
  payload,
});
