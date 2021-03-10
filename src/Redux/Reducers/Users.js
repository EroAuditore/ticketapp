import { START_EDIT_USERS, SUCCESS_EDIT_USERS } from '../Actions/users';

const initialState = {
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_EDIT_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case SUCCESS_EDIT_USERS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default usersReducer;
