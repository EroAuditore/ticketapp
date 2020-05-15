export const ADD_FACTURA = "ADD_FACTURA";
export const DELETE_FACTURA = "DELETE_FACTURA";
export const ADD_DEPOSITO = "ADD_DEPOSITO";
export const DELETE_DEPOSITO = "DELETE_DEPOSITO";
export const ADD_RETORNO = "ADD_RETORNO";
export const DELETE_RETORNO = "DELETE_RETORNO";

export const START_SAVE_MOVIMIENTO = "START_SAVE_MOVIMIENTO";
export const SUCCESS_SAVE_MOVIMIENTO = "SUCCESS_SAVE_MOVIMIENTO";
export const ERROR_SAVE_MOVIMIENTO = "ERROR_SAVE_MOVIMIENTO";

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
