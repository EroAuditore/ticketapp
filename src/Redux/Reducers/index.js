import { combineReducers } from 'redux';

import depositosReducer from './Depositos';

import ticketsReducer from './Tickets';
import movimientosReducer from './Movimientos';
import usersReducer from './Users';
import facturasReducer from './Facturas';
import agenteClienteReducer from './agenteCliente';

const allReducers = combineReducers({
  depositos: depositosReducer,
  tickets: ticketsReducer,
  movimientos: movimientosReducer,
  users: usersReducer,
  facturas: facturasReducer,
  agenteCliente: agenteClienteReducer,
});

export default allReducers;
