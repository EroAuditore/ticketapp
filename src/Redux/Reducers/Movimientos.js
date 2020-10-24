import {
  ADD_FACTURA,
  ADD_DEPOSITO,
  ADD_RETORNO,
  ADD_COMISION,
  DELETE_FACTURA,
  DELETE_RETORNO,
  DELETE_DEPOSITO,
  DELETE_COMISION,
  START_SAVE_MOVIMIENTO,
  SUCCESS_SAVE_MOVIMIENTO,
  ERROR_SAVE_MOVIMIENTO,
  START_ATTEND_MOVIMIENTO,
  SUCCESS_ATTEND_MOVIMIENTO,
  ERROR_ATTEND_MOVIMIENTO,
  NUEVO_MOVIMIENTO,
  SUCCESS_VM,
  START_VM,
  ERROR_VM,
  START_PROCESS,
  END_PROCESS,
} from "./../Actions/movimientos";

const initialState = {
  depositos: [],
  retornos: [],
  movimientos: [],
  comisiones: [],
  files: [],
  movimiento: {},
  msg: {},
  successProcess: false,
};

//Reducer que interactua con el state
const movimientosReducer = (state = initialState, action) => {
  switch (action.type) {
    /*case ADD_FACTURA:
      return { ...state, facturas: [...state.facturas, action.payload] };*/
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
    case ADD_COMISION:
      return {
        ...state,
        comisiones: [...state.comisiones, action.payload],
      };

    /*case DELETE_FACTURA:
      return {
        ...state,
        facturas: [
          ...state.facturas.filter((factura) => factura._id !== action.payload),
        ],
      };*/

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

    case DELETE_COMISION:
      return {
        ...state,
        comisiones: [
          ...state.comisiones.filter(
            (comision) => comision._id !== action.payload
          ),
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

    case START_ATTEND_MOVIMIENTO:
      return { ...state, isLoading: true };

    case SUCCESS_ATTEND_MOVIMIENTO:
      console.log("succcess atend", action.payload);
      return {
        isLoading: false,
        movimiento: action.result.data.movimiento,
        files: action.result.data.files,
        depositos: mapToDepositos(action.result.data.depositos),
        retornos: mapToRetornos(action.result.data.retornos),
        comisiones: action.result.data.comisiones,
      };
    case ERROR_ATTEND_MOVIMIENTO:
      return { ...state, isLoading: false, error: true };

    case NUEVO_MOVIMIENTO: {
      return initialState;
    }

    case START_VM:
      return {
        ...state,
        successProcess: false,
      };
    case SUCCESS_VM:
      return {
        ...state,
        movimiento: {
          ...action.payload,
          depositos: action.payload.depositos,
          retornos: action.payload.retornos,
          comisiones: action.payload.comisiones,
          estatusDeposito: action.payload.depositos ? "generado" : "pendiente",
          estatusRetorno: action.payload.retornos ? "generado" : "pendiente",
          estatusComision: action.payload.comisiones ? "generado" : "pendiente",
        },

        successProcess: true,
      };
    case ERROR_VM:
      return {
        ...state,
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

    default:
      return { ...state };
  }
};

function mapToDepositos(depositos) {
  var repl = depositos.map(function (obj) {
    return {
      _id: obj._id,
      bancoDeposito: obj.banco,
      depositoMonto: obj.monto,
      comentarioDeposito: obj.comentarios,
      fechaDeposito: obj.fecha,
      fechaDepositoStr: obj.fecha,
      ...obj,
    };
  });
  return repl;
}

function mapToRetornos(retornos) {
  var repl = retornos.map(function (obj) {
    return {
      _id: obj._id,
      nombreRetorno: obj.Nombre,
      entidadRetorno: obj.Banco,
      retornoMonto: obj.Monto,
      comentarioRetorno: obj.Comentario,
      cuentaRetorno: obj.Cuenta_clabe,
      ...obj,
    };
  });
  return repl;
}

export default movimientosReducer;
