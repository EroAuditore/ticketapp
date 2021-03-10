export const START_EDIT_USERS = 'START_EDIT_USERS';
export const SUCCESS_EDIT_USERS = 'SUCCESS_EDIT_USERS';
export const ERROR_EDIT_USERS = 'ERROR_EDIT_USERS';

export const startEditUsers = payload => ({
  type: START_EDIT_USERS,
  payload,
});

export const successEditUsers = payload => ({
  type: SUCCESS_EDIT_USERS,
  payload,
});

export const errorEditUsers = payload => ({
  type: ERROR_EDIT_USERS,
  payload,
});
