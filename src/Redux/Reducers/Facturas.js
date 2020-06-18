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
} from "./../Actions/facturas";

const initialState = {
  data: [],
  facturasMov: [],
  facturaEditar: {},
};

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
        facturasMov: action.result.data,
      };
    case ERROR_ATTEND_FACTURAS:
      return {
        ...state,
        facturasMov: [],
      };

    case START_EDIT_FACTURA:
      return {
        ...state,
        facturaEditar: action.payload,
      };
    case SUCCESS_EDIT_FACTURA:
      console.log("success_Edit_factura reducer", action.payload);
      return {
        ...state,
        facturaEditar: {},
        facturasMov: state.facturasMov.map((factura) =>
          factura._id === action.payload._id
            ? (factura = action.payload)
            : factura
        ),
      };
    case ERROR_EDIT_FACTURA:
      return {
        ...state,
        facturasMov: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default facturasReducer;
