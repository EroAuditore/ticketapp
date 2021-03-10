import {
  START_GET_DEPOSITOS,
  SUCCESS_GET_DEPOSITOS,
  ERROR_GET_DEPOSITOS,
} from '../Actions/depositos';

const initialState = {
  data: [],
};

// funcion reductora
const depositosReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_DEPOSITOS:
      return { ...state, isLoading: true };
    case SUCCESS_GET_DEPOSITOS:
      return {
        ...state,
        isLoading: false,
        data: action.result.data,
      };
    case ERROR_GET_DEPOSITOS:
      return { ...state, isLoading: false, data: null };
    default:
      return state;
  }
};

export default depositosReducer;
