export const START_GET_DEPOSITOS = "START_GET_DEPOSITOS";
export const SUCCESS_GET_DEPOSITOS = "SUCCESS_GET_DEPOSITOS";
export const ERROR_GET_DEPOSITOS = "SUCCESS_GET_DEPOSITOS";

export const startGetDepositos = payload => {
  return {
    type: START_GET_DEPOSITOS,
    ...payload
  };
};

export const successGetDepositos = payload => {
  return {
    type: SUCCESS_GET_DEPOSITOS,
    ...payload
  };
};

export const errorGetDepositos = payload => {
  return {
    type: ERROR_GET_DEPOSITOS,
    ...payload
  };
};
