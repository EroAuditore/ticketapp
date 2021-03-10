import {
  START_GET_FACTURAS,
  SUCCESS_GET_FACTURAS,
  ERROR_GET_FACTURAS,
  START_ATTEND_FACTURAS,
  SUCCESS_ATTEND_FACTURAS,
  ERROR_ATTEND_FACTURAS,
  START_EDIT_FACTURA,
  SUCCESS_EDIT_FACTURA,
  ERROR_EDIT_FACTURA,
  ADD_FACTURA,
  DELETE_FACTURA,
  START_SAVE_FACTURAS,
  ERROR_SAVE_FACTURAS,
  SUCCESS_SAVE_FACTURAS,
  START_GET_SOLICITUDES,
  SUCCESS_GET_SOLICITUDES,
  ERROR_GET_SOLICITUDES,
  START_FILTER_SOLICITUDES,
  SUCCESS_FILTER_SOLICITUDES,
  ERROR_FILTER_SOLICITUDES,
  ADD_PARTIDA,
  DELETE_PARTIDA,
  START_UPLOAD_XML,
  SUCCESS_UPLOAD_XML,

  START_UPLOAD_PDF,
  SUCCESS_UPLOAD_PDF,

  START_GEN_FACTURA,
  SUCCESS_GEN_FACTURA,
  ERROR_GEN_FACTURA,
  START_GET_MOVIMIENTOP,
  SUCCESS_GET_MOVIMIENTOP,
  ERROR_GET_MOVIMIENTOP,
  START_AFAM,
  SUCCESS_AFAM,
  ERROR_AFAM,
  SUCCESS_VXML,
  ERROR_VXML,
  START_VXML,
  NUEVO_VXML,
  START_PROCESS,
  END_PROCESS,
  NUEVA_SOLICITUD,
} from '../Actions/facturas';

const initialState = {
  data: [],
  facturasMov: [],
  facturaEditar: {},
  facturas: [],
  solicitudes: [],
  partidas: [],
  factura: {},
  movimientos: [],
  movimiento: {},
  facturaTemp: {},
  isLoading: false,
  successProcess: false,
  solicitud: {},
  files: [],
};
/* eslint-disable no-param-reassign, no-use-before-define, no-param-reassign, no-return-assign, max-len, prefer-destructuring */
const facturasReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case START_GET_FACTURAS:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_GET_FACTURAS:
      return {
        ...state,
        isLoading: false,
        data: action.result.data,
      };
    case ERROR_GET_FACTURAS:
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    case START_ATTEND_FACTURAS:
      return {
        ...state,
      };
    case SUCCESS_ATTEND_FACTURAS:
      return {
        ...state,
        facturas: action.result.data.facturas,
        solicitud: action.result.data.solicitud,
      };
    case ERROR_ATTEND_FACTURAS:
      return {
        ...state,
        solicitudes: [],
      };

    case START_EDIT_FACTURA:
      return {
        ...state,
        facturaEditar: action.payload,
      };
    case SUCCESS_EDIT_FACTURA:
      return {
        ...state,
        facturaEditar: {},
        facturasMov: state.facturasMov.map(factura => (factura._id === action.payload._id
          ? (factura = action.payload)
          : factura)),
      };
    case ERROR_EDIT_FACTURA:
      return {
        ...state,
        facturasMov: [],
      };

    case ADD_FACTURA:
      return { ...state, facturas: [...state.facturas, action.payload] };
    case DELETE_FACTURA:
      return {
        ...state,
        facturas: [
          ...state.facturas.filter(factura => factura._id !== action.payload),
        ],
      };

    case START_SAVE_FACTURAS:
      return { ...state, isLoading: true };

    case SUCCESS_SAVE_FACTURAS:
      return {
        ...state,
        isLoading: false,
      };
    case ERROR_SAVE_FACTURAS:
      return { ...state, isLoading: false, error: true };

    case START_GET_SOLICITUDES:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_GET_SOLICITUDES:
      return {
        ...state,
        isLoading: false,
        solicitudes: action.result.data,
      };
    case ERROR_GET_SOLICITUDES:
      return {
        ...state,
        isLoading: false,
        solicitudes: [],
      };

    case ERROR_FILTER_SOLICITUDES:
      return {
        ...state,
        solicitudes: [],
      };
    case START_FILTER_SOLICITUDES:
      return {
        ...state,
      };

    case SUCCESS_FILTER_SOLICITUDES:
      return {
        ...state,
        solicitudes: action.result.data,
      };

    case ADD_PARTIDA:
      return {
        ...state,
        /** Filtramos las facturas para agregarle su partida */
        facturas: state.facturas.map(factura => {
          if (factura._id === action.payload.facturaId) {
            factura.partidas = [...factura.partidas, action.payload];
            return factura;
          }
          return factura;
        }),
        partidas: [...state.partidas, action.payload],
      };
    case DELETE_PARTIDA:
      return {
        ...state,
        partidas: [
          ...state.partidas.filter(
            partidas => partidas._id !== action.payload,
          ),
        ],
      };

    case START_UPLOAD_XML:
      return {
        ...state,
      };

    case SUCCESS_UPLOAD_XML:
      const { data } = action.result;
      return {
        ...state,
        factura: { ...state.factura, estatus: '2' },
        facturas: state.facturas.map(factura => (factura._id === data[0]._id ? (factura = data[0]) : factura)),
        successProcess: true,
      };

    case START_UPLOAD_PDF:
      return {
        ...state,
      };
    case SUCCESS_UPLOAD_PDF:
      return {
        ...state,
        factura: { ...state.factura, estatus: '2' },
        facturas: state.facturas.map(factura => (factura._id === data[0]._id ? (factura = data[0]) : factura)),
        successProcess: true,
      };

    case START_GEN_FACTURA:
      return {
        ...state,
        facturaTemp: {},
      };
    case SUCCESS_GEN_FACTURA:
      return {
        ...state,
        factura: action.result.data.factura,
        files: action.result.data.files,
        // Facturas a generar
        // Informacion de la solicitud
        // Archivo de apoyo
      };
    case ERROR_GEN_FACTURA:
      return {
        ...state,
        factura: {},
      };

    case START_GET_MOVIMIENTOP:
      return { ...state, isLoading: true };
    case SUCCESS_GET_MOVIMIENTOP:
      return {
        ...state,
        isLoading: false,
        movimientos: action.result.data,
        movimiento: action.result.data[0],
      };
    case ERROR_GET_MOVIMIENTOP:
      return { ...state, isLoading: false, movimientos: [] };

    case START_AFAM:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_AFAM:
      return {
        ...state,
        isLoading: false,
        movimiento: action.result.data[0],
      };
    case ERROR_AFAM:
      return {
        ...state,
        isLoading: false,
        solicitudes: [],
      };

    /** *validar XML */
    case NUEVO_VXML:
      return {
        ...state,
        facturaTemp: {},
      };
    case START_VXML:
      return {
        ...state,
        successProcess: false,
      };
    case SUCCESS_VXML:

      return {
        ...state,
        facturaTemp: action.result.data,
        successProcess: true,
        // Facturas a generar
        // Informacion de la solicitud
        // Archivo de apoyo
      };
    case ERROR_VXML:
      return {
        ...state,
        /* facturaTemp: {}, */
      };

    case START_PROCESS:
      return {
        ...state,
        successProcess: false,
      };
    case END_PROCESS:
      return {
        ...state,
        successProcess: true,
      };

    case NUEVA_SOLICITUD:
      return {
        ...state,
        facturas: [],
      };

    default:
      return {
        ...state,
      };
  }
};
/* eslint-enable no-param-reassign, no-use-before-define, no-param-reassign, no-return-assign, max-len, prefer-destructuring */
export default facturasReducer;
