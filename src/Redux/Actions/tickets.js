export const START_GET_TICKETS = 'START_GET_TICKETS';
export const SUCCESS_GET_TICKETS = 'SUCCESS_GET_TICKETS';
export const ERROR_GET_TICKETS = 'SUCCESS_GET_TICKETS';

export const START_FILTER_MOVIMIENTO = 'START_FILTER_MOVIMIENTO';
export const SUCCESS_FILTER_MOVIMIENTO = 'SUCCESS_FILTER_MOVIMIENTO';
export const ERROR_FILTER_MOVIMIENTO = 'ERROR_FILTER_MOVIMIENTO';

export const startGetTickets = payload => ({
  type: START_GET_TICKETS,
  ...payload,
});

export const successGetTickets = payload => ({
  type: SUCCESS_GET_TICKETS,
  ...payload,
});

export const errorGetTickets = payload => ({
  type: ERROR_GET_TICKETS,
  ...payload,
});

export const startFilterMovimiento = payload => ({
  type: START_FILTER_MOVIMIENTO,
  payload,
});

export const successFilterMovimiento = payload => ({
  type: SUCCESS_FILTER_MOVIMIENTO,
  payload,
});

export const errorFilterMovimiento = payload => ({
  type: ERROR_FILTER_MOVIMIENTO,
  payload,
});
