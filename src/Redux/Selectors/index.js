import { get } from 'lodash';

export const isDepositosLoading = state => get(state, 'depositos.isLoading');
export const depositosResult = state => get(state, 'depositos.data');

export const isTicketsLoading = state => get(state, 'tickets.isLoading');
export const ticketsResult = state => get(state, 'tickets.data');

export const facturaSelector = state => get(state, 'facturas.facturas');
export const facturaGenSelector = state => get(state, 'facturas.factura');
export const facturaTempSelector = state => get(state, 'facturas.facturaTemp');
export const partidaSelector = state => get(state, 'facturas.partidas');
export const movimientosPSelector = state => get(state, 'facturas.movimientos');
export const facturaMoviemntoSelector = state => get(state, 'facturas.movimiento');
export const facturaFileSelector = state => get(state, 'facturas.files');

export const solicitudesSelector = state => get(state, 'facturas.solicitudes');
export const mfacturaSelector = state => get(state, 'facturas.data');
export const clienteSelector = state => get(state, 'agenteCliente.cliente');

export const attFacturasSelector = state => get(state, 'facturas.facturas');

export const depositoSelector = state => get(state, 'movimientos.depositos');
export const movimientoSelector = state => get(state, 'movimientos.movimiento');
export const movimientoFileSelector = state => get(state, 'movimientos.files');
export const retornoSelector = state => get(state, 'movimientos.retornos');
export const comisionesSelector = state => get(state, 'movimientos.comisiones');

export const userSelector = state => get(state, 'users.user');

export const agentesSelector = state => get(state, 'agenteCliente.agentesList');

export const clientesSelector = state => get(state, 'agenteCliente.clientesList');

export const solicitudSelector = state => get(state, 'agenteCliente.solicitudList');

export const AClientesSelector = state => get(state, 'agenteCliente.clientes');

export const processSelector = state => get(state, 'facturas.successProcess');
