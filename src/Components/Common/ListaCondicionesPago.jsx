import React, { Component } from "react";

class ListaCondicionesPago extends Component {
  render() {
    return (
      <select
        className="custom-select custom-select-md"
        id="condicionPago"
        name="condicionPago"
        onChange={this.props.onChange}
        value={this.props.value}
      >
        <option value="">Selecciona la condición de pago</option>
        <option value="Pago al contado">Pago al contado</option>
        <option value="Pago anticipado">Pago anticipado</option>
        <option value="Pago aplazado">Pago aplazado</option>
      </select>
    );
  }
}

export default ListaCondicionesPago;
