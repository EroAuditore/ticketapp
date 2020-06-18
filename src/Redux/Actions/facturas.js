export const START_GET_FACTURAS = "START_GET_FACTURAS";
export const SUCCESS_GET_FACTURAS = "SUCCESS_GET_FACTURAS";
export const ERROR_GET_FACTURAS = "ERROR_GET_FACTURAS";

export const START_ATTEND_FACTURAS = "START_ATTEND_FACTURAS";
export const SUCCESS_ATTEND_FACTURAS = "SUCCESS_ATTEND_FACTURAS";
export const ERROR_ATTEND_FACTURAS = "ERROR_ATTEND_FACTURAS";

export const START_EDIT_FACTURA = "START_EDIT_FACTURA";
export const SUCCESS_EDIT_FACTURA = "SUCCESS_EDIT_FACTURA";
export const ERROR_EDIT_FACTURA = "ERROR_EDIT_FACTURA";

export const startGetFacturas = (payload) => {
  return {
    type: START_GET_FACTURAS,
    payload,
  };
};

export const successGetFacturas = (payload) => {
  return {
    type: SUCCESS_GET_FACTURAS,
    payload,
  };
};

export const errorGetFacturas = (payload) => {
  return {
    type: ERROR_GET_FACTURAS,
    payload,
  };
};

export const startAttendFacturas = (payload) => {
  return {
    type: START_ATTEND_FACTURAS,
    payload,
  };
};

export const successAttendFacturas = (payload) => {
  return {
    type: SUCCESS_ATTEND_FACTURAS,
    payload,
  };
};

export const errorAttendFacturas = (payload) => {
  return {
    type: ERROR_ATTEND_FACTURAS,
    payload,
  };
};

export const startEditFactura = (payload) => {
  return {
    type: START_EDIT_FACTURA,
    payload,
  };
};

export const successEditFactura = (payload) => {
  return {
    type: SUCCESS_EDIT_FACTURA,
    payload,
  };
};

export const errorEditFactura = (payload) => {
  return {
    type: ERROR_EDIT_FACTURA,
    payload,
  };
};
