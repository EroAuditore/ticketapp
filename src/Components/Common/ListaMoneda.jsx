import React, { Component } from "react";

class ListaMoneda extends Component {
  state = {};
  render() {
    return (
      <select
        className="custom-select custom-select-md"
        id="moneda"
        name="moneda"
        onChange={this.props.onChange}
        value={this.props.value}
      >
        <option value="MNX - Pesos">MNX - Pesos</option>
        <option value="DLS - Dolares">DLS - Dolares</option>
      </select>
    );
  }
}

export default ListaMoneda;
