import { combineReducers } from "redux";

import depositosReducer from "./Depositos";

import ticketsReducer from "./Tickets";
import movimientosReducer from "./Movimientos";

const allReducers = combineReducers({
  depositos: depositosReducer,
  tickets: ticketsReducer,
  movimientos: movimientosReducer,
});

export default allReducers;
