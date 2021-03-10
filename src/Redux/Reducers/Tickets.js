import {
  START_GET_TICKETS,
  SUCCESS_GET_TICKETS,
  ERROR_GET_TICKETS,
  START_FILTER_MOVIMIENTO,
  SUCCESS_FILTER_MOVIMIENTO,
  ERROR_FILTER_MOVIMIENTO,
} from '../Actions/tickets';

const initialState = {
  data: [],
};

// funcion reductora
const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_TICKETS:
      return { ...state, isLoading: true };
    case SUCCESS_GET_TICKETS:
      return {
        ...state,
        isLoading: false,
        data: action.result.data,
      };
    case ERROR_GET_TICKETS:
      return { ...state, isLoading: false, data: null };

    case START_FILTER_MOVIMIENTO:
      return { ...state, isLoading: true };

    case SUCCESS_FILTER_MOVIMIENTO:
      return {
        ...state,
        isLoading: false,
        data: action.result.data,
      };
    case ERROR_FILTER_MOVIMIENTO:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export default ticketsReducer;
