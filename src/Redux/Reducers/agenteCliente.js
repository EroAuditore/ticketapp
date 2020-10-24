import { START_ATTEND_MOVIMIENTO } from "../Actions/movimientos";
import {
  GET_AGENTES,
  START_AGENTES,
  ERROR_AGENTES,
  GET_CLIENTES,
  START_CLIENTES,
  ERROR_CLIENTES,
  GET_SOLICITUD,
  START_SOLICITUD,
  ERROR_SOLICITUD,
  START_FILTER_CLIENTE,
  SUCCESS_FILTER_CLIENTE,
  ERROR_FILTER_CLIENTE,
  START_NC,
  START_NA,
  SUCCESS_NC,
  SUCCESS_NA,
  ERROR_NA,
  ERROR_NC,
  START_AC,
  SUCCESS_AC,
  ERROR_AC,
} from "./../Actions/agenteCliente";

const initialState = {
  agentesList: [],
  clientesList: [],
  solicitudList: [],
  cliente: {},
  clientes: [],
};

//funcion reductora
const agenteClienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AGENTES:
      return {
        ...state,
        agentesList: action.result.data,
      };

    case START_AGENTES:
      return {
        ...state,
      };

    case ERROR_AGENTES:
      return { ...state };

    case GET_CLIENTES:
      return {
        ...state,
        clientesList: action.result.data,
      };

    case START_CLIENTES:
      return {
        ...state,
      };

    case ERROR_CLIENTES:
      return { ...state };

    case GET_SOLICITUD:
      return {
        ...state,
        solicitudList: action.result.data,
      };

    case START_SOLICITUD:
      return {
        ...state,
      };

    case ERROR_SOLICITUD:
      return { ...state };

    /***CLIENTE **/
    case SUCCESS_FILTER_CLIENTE:
      return {
        ...state,
        cliente: action.result.data[0],
      };

    case START_FILTER_CLIENTE:
      return {
        ...state,
      };

    case ERROR_FILTER_CLIENTE:
      return { ...state };

    /**** NUEVOS AGENTES Y CLIENTES *****/

    case START_NA:
      return {
        ...state,
      };
    case SUCCESS_NA:
      return {
        ...state,
        /*agentesList: [...state.agentesList, action.result.data],*/
        agentesList: action.result.data,
      };

    case ERROR_NA:
      return { ...state };

    /**** TODOS LOS CLIENTES *****/

    case START_AC:
      return {
        ...state,
      };
    case SUCCESS_AC:
      return {
        ...state,
        clientes: action.result.data,
      };

    case ERROR_AC:
      return { ...state };

    /***nuevo cliente en el modulo de clientes */
    case START_NC:
      return {
        ...state,
      };
    case SUCCESS_NC:
      return {
        ...state,
        clientes: action.result.data,
      };

    case ERROR_NC:
      return { ...state };

    default:
      return { ...state };
  }
};

export default agenteClienteReducer;
