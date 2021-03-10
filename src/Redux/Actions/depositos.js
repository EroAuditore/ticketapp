export const START_GET_DEPOSITOS = 'START_GET_DEPOSITOS';
export const SUCCESS_GET_DEPOSITOS = 'SUCCESS_GET_DEPOSITOS';
export const ERROR_GET_DEPOSITOS = 'SUCCESS_GET_DEPOSITOS';

export const startGetDepositos = payload => ({
  type: START_GET_DEPOSITOS,
  ...payload,
});

export const successGetDepositos = payload => ({
  type: SUCCESS_GET_DEPOSITOS,
  ...payload,
});

export const errorGetDepositos = payload => ({
  type: ERROR_GET_DEPOSITOS,
  ...payload,
});
