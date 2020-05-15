export const START_GET_TICKETS = "START_GET_TICKETS";
export const SUCCESS_GET_TICKETS = "SUCCESS_GET_TICKETS";
export const ERROR_GET_TICKETS = "SUCCESS_GET_TICKETS";

export const START_FILTER_MOVIMIENTO = "START_FILTER_MOVIMIENTO";
export const SUCCESS_FILTER_MOVIMIENTO = "SUCCESS_FILTER_MOVIMIENTO";
export const ERROR_FILTER_MOVIMIENTO = "ERROR_FILTER_MOVIMIENTO";

export const startGetTickets = (payload) => {
  return {
    type: START_GET_TICKETS,
    ...payload,
  };
};

export const successGetTickets = (payload) => {
  return {
    type: SUCCESS_GET_TICKETS,
    ...payload,
  };
};

export const errorGetTickets = (payload) => {
  return {
    type: ERROR_GET_TICKETS,
    ...payload,
  };
};

export const startFilterMovimiento = (payload) => {
  return {
    type: START_FILTER_MOVIMIENTO,
    payload,
  };
};

export const successFilterMovimiento = (payload) => {
  return {
    type: SUCCESS_FILTER_MOVIMIENTO,
    payload,
  };
};

export const errorFilterMovimiento = (payload) => {
  return {
    type: ERROR_FILTER_MOVIMIENTO,
    payload,
  };
};
