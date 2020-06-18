import React, { Component } from "react";

class ListaTipoComprobante extends Component {
  render() {
    return (
      <select
        onChange={this.props.onChange}
        value={this.props.value}
        className="custom-select custom-select-sm"
        id="tipoComprobante"
        name="tipoComprobante"
      >
        <option value="">Selecciona el tipo de comprobante</option>
        <option value="Comprobante de Ingreso">Comprobante de Ingreso</option>
        <option value="Comprobante de Egreso">Comprobante de Egreso</option>
        <option value="Comprobante de Traslado">Comprobante de Traslado</option>
        <option value="Comprobante de Recepción de pagos">
          Comprobante de Recepción de pagos
        </option>
        <option value="Comprobante de Nómina">Comprobante de Nómina</option>
        <option value="Comprobante de Retenciones e información de pagos">
          Comprobante de Retenciones e información de pagos
        </option>
      </select>
    );
  }
}

export default ListaTipoComprobante;
