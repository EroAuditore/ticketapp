export const START_EDIT_USERS = "START_EDIT_USERS";
export const SUCCESS_EDIT_USERS = "SUCCESS_EDIT_USERS";
export const ERROR_EDIT_USERS = "ERROR_EDIT_USERS";

export const startEditUsers = (payload) => {
  return {
    type: START_EDIT_USERS,
    payload,
  };
};

export const successEditUsers = (payload) => {
  return {
    type: SUCCESS_EDIT_USERS,
    payload,
  };
};

export const errorEditUsers = (payload) => {
  return {
    type: ERROR_EDIT_USERS,
    payload,
  };
};
