import React, { Component } from "react";

class ListaFormaPago extends Component {
  state = {};
  render() {
    return (
      <select
        className="custom-select custom-select-sm"
        id="formaPago"
        name="formaPago"
        onChange={this.props.onChange}
        value={this.props.value}
      >
        <option value="">Selecciona la forma de pago</option>
        <option value="Efectivo">Efectivo</option>
        <option value="Cheque nominativo">Cheque nominativo</option>
        <option value="Transferencia electrónica de fondos">
          Transferencia electrónica de fondos
        </option>
        <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
        <option value="Monedero electrónico">Monedero electrónico</option>
        <option value="Dinero electrónico">Dinero electrónico</option>
        <option value="Vales de despensa">Vales de despensa</option>
        <option value="Tarjeta de débito">Tarjeta de débito</option>
        <option value="Tarjeta de servicio">Tarjeta de servicio</option>
        <option value="Otros">Otros</option>
      </select>
    );
  }
}

export default ListaFormaPago;
