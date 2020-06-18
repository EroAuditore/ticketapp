import React, { Component } from "react";

class ListaMetodoPago extends Component {
  state = {};
  render() {
    return (
      <select
        className="custom-select custom-select-sm"
        id="metodoPago"
        name="metodoPago"
        onChange={this.props.onChange}
        value={this.props.value}
      >
        <option value="">Selecciona el metodo de pago</option>
        <option value="Pago en una sola exhibición">
          Pago en una sola exhibición
        </option>
        <option value="Pago en parcialidades o diferido">
          Pago en parcialidades o diferido
        </option>
      </select>
    );
  }
}

export default ListaMetodoPago;
