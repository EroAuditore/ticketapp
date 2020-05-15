import { all } from "redux-saga/effects";

import depositos from "./depositos";
import tickets from "./tickets";
import movimientos from "./movimientos";

//Es donde se van a ejecutar todos los watchers
export default function* rootSaga() {
  yield all([depositos(), tickets(), movimientos()]);
}
