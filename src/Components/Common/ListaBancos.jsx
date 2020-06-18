import React, { Component } from "react";

class ListaBancos extends Component {
  state = {};
  render() {
    return (
      <select
        className="custom-select custom-select-sm"
        id="banco"
        onChange={this.props.onChange}
        value={this.props.value}
      >
        <option value="">Selecciona el banco</option>
        <option value="Bancomer">Bancomer</option>
        <option value="Banamex">Banamex</option>
        <option value="Santander">Santander</option>
      </select>
    );
  }
}

export default ListaBancos;
