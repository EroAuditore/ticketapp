import {
  ADD_FACTURA,
  ADD_DEPOSITO,
  ADD_RETORNO,
  DELETE_FACTURA,
  DELETE_RETORNO,
  DELETE_DEPOSITO,
  START_SAVE_MOVIMIENTO,
  SUCCESS_SAVE_MOVIMIENTO,
  ERROR_SAVE_MOVIMIENTO,
} from "./../Actions/movimientos";

const initialState = {
  facturas: [],
  depositos: [],
  retornos: [],
};

//Reducer que interactua con el state
const movimientosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FACTURA:
      return { ...state, facturas: [...state.facturas, action.payload] };
    case ADD_DEPOSITO:
      return {
        ...state,
        depositos: [...state.depositos, action.payload],
      };
    case ADD_RETORNO:
      return {
        ...state,
        retornos: [...state.retornos, action.payload],
      };

    case DELETE_FACTURA:
      return {
        ...state,
        facturas: [
          ...state.facturas.filter((factura) => factura._id !== action.payload),
        ],
      };

    case DELETE_DEPOSITO:
      return {
        ...state,
        depositos: [
          ...state.depositos.filter(
            (deposito) => deposito._id !== action.payload
          ),
        ],
      };

    case DELETE_RETORNO:
      return {
        ...state,
        retornos: [
          ...state.retornos.filter((retorno) => retorno._id != action.payload),
        ],
      };
    case START_SAVE_MOVIMIENTO:
      return { ...state, isLoading: true };

    case SUCCESS_SAVE_MOVIMIENTO:
      return {
        ...state,
        isLoading: false,
      };
    case ERROR_SAVE_MOVIMIENTO:
      return { ...state, isLoading: false, error: true };

    default:
      return state;
  }
};

export default movimientosReducer;
