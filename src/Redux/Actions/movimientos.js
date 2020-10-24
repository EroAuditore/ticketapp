export const ADD_FACTURA = "ADD_FACTURA";
export const DELETE_FACTURA = "DELETE_FACTURA";
export const ADD_DEPOSITO = "ADD_DEPOSITO";
export const DELETE_DEPOSITO = "DELETE_DEPOSITO";
export const ADD_RETORNO = "ADD_RETORNO";
export const DELETE_RETORNO = "DELETE_RETORNO";
export const ADD_COMISION = "ADD_COMISION";
export const DELETE_COMISION = "DELETE_COMISION";

export const START_SAVE_MOVIMIENTO = "START_SAVE_MOVIMIENTO";
export const SUCCESS_SAVE_MOVIMIENTO = "SUCCESS_SAVE_MOVIMIENTO";
export const ERROR_SAVE_MOVIMIENTO = "ERROR_SAVE_MOVIMIENTO";

export const START_ATTEND_MOVIMIENTO = "START_ATTEND_MOVIMIENTO";
export const SUCCESS_ATTEND_MOVIMIENTO = "SUCCESS_ATTEND_MOVIMIENTO";
export const ERROR_ATTEND_MOVIMIENTO = "ERROR_ATTEND_MOVIMIENTO";

export const NUEVO_MOVIMIENTO = "NUEVO_MOVIMIENTO";

/***validar movimiento */
export const START_VM = "START_VM";
export const SUCCESS_VM = "SUCCESS_VM";
export const ERROR_VM = "ERROR_VM";

export const START_PROCESS = "START_PROCESS";
export const END_PROCESS = "END_PROCESS";

export const addFactura = (payload) => {
  return {
    type: ADD_FACTURA,
    payload,
  };
};

export const deleteFactura = (payload) => {
  return {
    type: DELETE_FACTURA,
    payload,
  };
};

export const addDeposito = (payload) => {
  return {
    type: ADD_DEPOSITO,
    payload,
  };
};

export const deleteDeposito = (payload) => {
  return {
    type: DELETE_DEPOSITO,
    payload,
  };
};

export const addRetorno = (payload) => {
  return {
    type: ADD_RETORNO,
    payload,
  };
};

export const deleteRetorno = (payload) => {
  return {
    type: DELETE_RETORNO,
    payload,
  };
};

export const nuevoMovimiento = (payload) => {
  return {
    type: NUEVO_MOVIMIENTO,
    payload,
  };
};

export const startSaveMovimiento = (payload) => {
  return {
    type: START_SAVE_MOVIMIENTO,
    payload,
  };
};

export const successSaveMovimiento = (payload) => {
  return {
    type: SUCCESS_SAVE_MOVIMIENTO,
    payload,
  };
};

export const errorSaveMovimiento = (payload) => {
  return {
    type: ERROR_SAVE_MOVIMIENTO,
    payload,
  };
};

export const addComision = (payload) => {
  return {
    type: ADD_COMISION,
    payload,
  };
};

export const deleteComision = (payload) => {
  return {
    type: DELETE_COMISION,
    payload,
  };
};

/*****Atencion de ticket/movimiento ************/

export const startAttendMovimiento = (payload) => {
  return {
    type: START_ATTEND_MOVIMIENTO,
    payload,
  };
};

export const successAttendMovimiento = (payload) => {
  return {
    type: SUCCESS_ATTEND_MOVIMIENTO,
    payload,
  };
};

export const errorAttendMovimiento = (payload) => {
  return {
    type: ERROR_ATTEND_MOVIMIENTO,
    payload,
  };
};

/***** VALIDAR MOVIMIENTO ************/

export const startVM = (payload) => {
  return {
    type: START_VM,
    payload,
  };
};

export const successVM = (payload) => {
  return {
    type: SUCCESS_VM,
    payload,
  };
};

export const errorVM = (payload) => {
  return {
    type: ERROR_VM,
    payload,
  };
};
