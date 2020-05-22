import { combineReducers } from "redux";

import depositosReducer from "./Depositos";

import ticketsReducer from "./Tickets";
import movimientosReducer from "./Movimientos";
import usersReducer from "./Users";

const allReducers = combineReducers({
  depositos: depositosReducer,
  tickets: ticketsReducer,
  movimientos: movimientosReducer,
  users: usersReducer,
});

export default allReducers;
