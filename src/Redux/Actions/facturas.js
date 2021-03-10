export const START_GET_FACTURAS = 'START_GET_FACTURAS';
export const SUCCESS_GET_FACTURAS = 'SUCCESS_GET_FACTURAS';
export const ERROR_GET_FACTURAS = 'ERROR_GET_FACTURAS';

export const START_ATTEND_FACTURAS = 'START_ATTEND_FACTURAS';
export const SUCCESS_ATTEND_FACTURAS = 'SUCCESS_ATTEND_FACTURAS';
export const ERROR_ATTEND_FACTURAS = 'ERROR_ATTEND_FACTURAS';

export const START_EDIT_FACTURA = 'START_EDIT_FACTURA';
export const SUCCESS_EDIT_FACTURA = 'SUCCESS_EDIT_FACTURA';
export const ERROR_EDIT_FACTURA = 'ERROR_EDIT_FACTURA';

export const ADD_FACTURA = 'ADD_FACTURA';
export const DELETE_FACTURA = 'DELETE_FACTURA';

export const START_SAVE_FACTURAS = 'START_SAVE_FACTURAS';
export const SUCCESS_SAVE_FACTURAS = 'SUCCESS_SAVE_FACTURAS';
export const ERROR_SAVE_FACTURAS = 'ERROR_SAVE_FACTURAS';

export const START_GET_SOLICITUDES = 'START_GET_SOLICITUDES';
export const SUCCESS_GET_SOLICITUDES = 'SUCCESS_GET_SOLICITUDES';
export const ERROR_GET_SOLICITUDES = 'ERROR_GET_SOLICITUDES';

export const START_FILTER_SOLICITUDES = 'START_FILTER_SOLICITUDES';
export const SUCCESS_FILTER_SOLICITUDES = 'SUCCESS_FILTER_SOLICITUDES';
export const ERROR_FILTER_SOLICITUDES = 'ERROR_FILTER_SOLICITUDES';

export const ADD_PARTIDA = 'ADD_PARTIDA';
export const DELETE_PARTIDA = 'DELETE_PARTIDA';

export const START_UPLOAD_XML = 'START_UPLOAD_XML';
export const SUCCESS_UPLOAD_XML = 'SUCCESS_UPLOAD_XML';
export const ERROR_UPLOAD_XML = 'ERROR_UPLOAD_XML';

export const START_UPLOAD_PDF = 'START_UPLOAD_PDF';
export const SUCCESS_UPLOAD_PDF = 'SUCCESS_UPLOAD_PDF';
export const ERROR_UPLOAD_PDF = 'ERROR_UPLOAD_PDF';

export const START_GEN_FACTURA = 'START_GEN_FACTURA';
export const SUCCESS_GEN_FACTURA = 'SUCCESS_GEN_FACTURA';
export const ERROR_GEN_FACTURA = 'ERROR_GEN_FACTURA';

export const START_GET_MOVIMIENTOP = 'START_GET_MOVIMIENTOP';
export const SUCCESS_GET_MOVIMIENTOP = 'SUCCESS_GET_MOVIMIENTOP';
export const ERROR_GET_MOVIMIENTOP = 'ERROR_GET_MOVIMIENTOP';

/** *asignar facturas a movimiento */

export const START_AFAM = 'START_AFAM';
export const SUCCESS_AFAM = 'SUCCESS_AFAM';
export const ERROR_AFAM = 'ERROR_AFAM';

/** ******** validar XML *************** */
export const START_VXML = 'START_VXML';
export const SUCCESS_VXML = 'SUCCESS_VXML';
export const NUEVO_VXML = 'NUEVO_VXML';
export const ERROR_VXML = 'ERROR_VXML';
export const START_PROCESS = 'START_PROCESS';
export const END_PROCESS = 'END_PROCESS';

export const NUEVA_SOLICITUD = 'NUEVA_SOLICITUD';

/** * VARIABLE PARA PROCESOS */

export const startProcess = () => ({
  type: START_PROCESS,
});

export const endProcess = () => ({
  type: END_PROCESS,
});

/** ** FIN */

export const nuevaSolicitud = () => ({
  type: NUEVA_SOLICITUD,
});

export const startGetFacturas = payload => ({
  type: START_GET_FACTURAS,
  payload,
});

export const successGetFacturas = payload => ({
  type: SUCCESS_GET_FACTURAS,
  payload,
});

export const errorGetFacturas = payload => ({
  type: ERROR_GET_FACTURAS,
  payload,
});

export const startAttendFacturas = payload => ({
  type: START_ATTEND_FACTURAS,
  payload,
});

export const successAttendFacturas = payload => ({
  type: SUCCESS_ATTEND_FACTURAS,
  payload,
});

export const errorAttendFacturas = payload => ({
  type: ERROR_ATTEND_FACTURAS,
  payload,
});

export const startEditFactura = payload => ({
  type: START_EDIT_FACTURA,
  payload,
});

export const successEditFactura = payload => ({
  type: SUCCESS_EDIT_FACTURA,
  payload,
});

export const errorEditFactura = payload => ({
  type: ERROR_EDIT_FACTURA,
  payload,
});

export const addFactura = payload => ({
  type: ADD_FACTURA,
  payload,
});

export const deleteFactura = payload => ({
  type: DELETE_FACTURA,
  payload,
});

export const startSaveFacturas = payload => ({
  type: START_SAVE_FACTURAS,
  payload,
});

export const successSaveFacturas = payload => ({
  type: SUCCESS_SAVE_FACTURAS,
  payload,
});

export const errorSaveFacturas = payload => ({
  type: ERROR_SAVE_FACTURAS,
  payload,
});

export const startGetSolicitudes = payload => ({
  type: START_GET_SOLICITUDES,
  payload,
});

export const successGetSolicitudes = payload => ({
  type: SUCCESS_GET_SOLICITUDES,
  payload,
});

export const errorGetSolicitudes = payload => ({
  type: ERROR_GET_SOLICITUDES,
  payload,
});

/** ******************** FILTRADO DE SOLICITUDES ************************** */

export const startFilterSolicitudes = payload => ({
  type: START_FILTER_SOLICITUDES,
  payload,
});

export const successFilterSolicitudes = payload => ({
  type: SUCCESS_FILTER_SOLICITUDES,
  payload,
});

export const errorFilterSolicitudes = payload => ({
  type: ERROR_FILTER_SOLICITUDES,
  payload,
});

/** ******************  PARTIDAS *********************************** */

export const addPartida = payload => ({
  type: ADD_PARTIDA,
  payload,
});

export const deletePartida = payload => ({
  type: DELETE_PARTIDA,
  payload,
});

/** ************* PDF  ****************************** */

export const startUploadPDF = payload => ({
  type: START_UPLOAD_PDF,
  payload,
});

export const successUploadPDF = payload => ({
  type: SUCCESS_UPLOAD_PDF,
  payload,
});

export const errorUploadPDF = payload => ({
  type: ERROR_UPLOAD_PDF,
  payload,
});

/** ************* XML****************************** */

export const startUploadXML = payload => ({
  type: START_UPLOAD_XML,
  payload,
});

export const successUploadXML = payload => ({
  type: SUCCESS_UPLOAD_XML,
  payload,
});

export const errorUploadXML = payload => ({
  type: ERROR_UPLOAD_XML,
  payload,
});

/** ************* VALIDAR XML****************************** */

export const startVXML = payload => ({
  type: START_VXML,
  payload,
});

export const successVXML = payload => ({
  type: SUCCESS_VXML,
  payload,
});

export const errorVXML = payload => ({
  type: ERROR_VXML,
  payload,
});

/** *************GENERAR FACTURAS **************************** */

export const startGenFactura = payload => ({
  type: START_GEN_FACTURA,
  payload,
});

export const successGenFactura = payload => ({
  type: SUCCESS_GEN_FACTURA,
  payload,
});

export const errorGenFactura = payload => ({
  type: ERROR_GEN_FACTURA,
  payload,
});

/** ***MOVIMIENTOS PENDIENTES DE FACTURAR *********** */

export const startGetMovimientoP = payload => ({
  type: START_GET_MOVIMIENTOP,
  payload,
});

export const successGetMovimientoP = payload => ({
  type: SUCCESS_GET_MOVIMIENTOP,
  payload,
});

export const errorGetMovimientoP = payload => ({
  type: ERROR_GET_MOVIMIENTOP,
  payload,
});

//* ***** Asignar Factura  A Movimiento  ****** */

export const startAFAM = payload => ({
  type: START_AFAM,
  payload,
});

export const successAFAM = payload => ({
  type: SUCCESS_AFAM,
  payload,
});

export const errorAFAM = payload => ({
  type: ERROR_AFAM,
  payload,
});
