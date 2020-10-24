export const GET_AGENTES = "GET_AGENTES";

export const START_AGENTES = "START_AGENTES";
export const ERROR_AGENTES = "ERROR_AGENTES";

export const GET_CLIENTES = "GET_CLIENTES";
export const START_CLIENTES = "START_CLIENTES";
export const ERROR_CLIENTES = "ERROR_CLIENTES";

export const GET_SOLICITUD = "GET_SOLICITUD";
export const START_SOLICITUD = "START_SOLICITUD";
export const ERROR_SOLICITUD = "ERROR_SOLCITUD";

export const START_FILTER_CLIENTE = "START_FILTER_CLIENTE";
export const SUCCESS_FILTER_CLIENTE = "SUCCESS_FILTER_CLIENTE";
export const ERROR_FILTER_CLIENTE = "ERROR_FILTER_CLIENTE";

/* NUEVO AGENTES */
export const START_NA = "START_NA";
export const SUCCESS_NA = "SUCCESS_NA";
export const ERROR_NA = "ERROR_NA";

/* NUEVO CLIENTES */
export const START_NC = "START_NC";
export const SUCCESS_NC = "SUCCESS_NC";
export const ERROR_NC = "ERROR_NC";

/***TODOS LOS CLIENTES */
export const START_AC = "START_AC";
export const SUCCESS_AC = "SUCCESS_AC";
export const ERROR_AC = "ERROR_AC";

export const getAgentes = (payload) => {
  return {
    type: GET_AGENTES,
    payload,
  };
};

export const startAgentes = (payload) => {
  return {
    type: START_AGENTES,
    payload,
  };
};

export const errorAgentes = (payload) => {
  return {
    type: ERROR_AGENTES,
    payload,
  };
};

export const getClientes = (payload) => {
  return {
    type: GET_CLIENTES,
    payload,
  };
};

export const startClientes = (payload) => {
  return {
    type: START_CLIENTES,
    payload,
  };
};

export const errorClientes = (payload) => {
  return {
    type: ERROR_CLIENTES,
    payload,
  };
};

export const getSolicitud = (payload) => {
  return {
    type: GET_SOLICITUD,
    payload,
  };
};

export const startSolicitud = (payload) => {
  return {
    type: START_SOLICITUD,
    payload,
  };
};

export const errorSolicitud = (payload) => {
  return {
    type: ERROR_SOLICITUD,
    payload,
  };
};

export const startCliente = (payload) => {
  return {
    type: START_FILTER_CLIENTE,
    payload,
  };
};

export const successCliente = (payload) => {
  return {
    type: SUCCESS_FILTER_CLIENTE,
    payload,
  };
};

export const errorCliente = (payload) => {
  return {
    type: ERROR_FILTER_CLIENTE,
    payload,
  };
};

/****NUEVOS AGENTES Y CLIENTES */

export const startNA = (payload) => {
  return {
    type: START_NA,
    payload,
  };
};

export const successNA = (payload) => {
  return {
    type: SUCCESS_NA,
    payload,
  };
};

export const errorNA = (payload) => {
  return {
    type: ERROR_NA,
    payload,
  };
};

export const startNC = (payload) => {
  return {
    type: START_NC,
    payload,
  };
};

export const successNC = (payload) => {
  return {
    type: SUCCESS_NC,
    payload,
  };
};

export const errorNC = (payload) => {
  return {
    type: ERROR_NC,
    payload,
  };
};

export const startAC = (payload) => {
  return {
    type: START_AC,
    payload,
  };
};

export const successAC = (payload) => {
  return {
    type: SUCCESS_AC,
    payload,
  };
};

export const errorAC = (payload) => {
  return {
    type: ERROR_AC,
    payload,
  };
};
