import React, { Component } from "react";

class ListaUsoCFDI extends Component {
  state = {};
  render() {
    return (
      <select
        className="custom-select custom-select-sm"
        id="usoCFDI"
        name="usoCFDI"
        onChange={this.props.onChange}
        value={this.props.value}
      >
        <option value="">Selecciona el uso CFDI</option>
        <option value="Adquisición de mercancías">
          Adquisición de mercancías
        </option>
        <option value="Devoluciones, descuentos o bonificaciones">
          Devoluciones, descuentos o bonificaciones
        </option>
        <option value="Gastos en general">Gastos en general</option>
        <option value="Construcciones">Construcciones</option>
        <option value="Mobiliario y equipo de oficina por inversiones">
          Mobiliario y equipo de oficina por inversiones
        </option>
        <option value="Equipo de transporte">Equipo de transporte</option>
        <option value="Equipo de computo y accesorios">
          Equipo de computo y accesorios
        </option>
        <option value="Dados, troqueles, moldes, matrices y herramiental">
          Dados, troqueles, moldes, matrices y herramiental
        </option>
        <option value="Comunicaciones telefónicas">
          Comunicaciones telefónicas
        </option>
        <option value="Comunicaciones satelitales">
          Comunicaciones satelitales
        </option>
        <option value="Otro maquina y equipo">Otro maquina y equipo</option>
        <option value="Honorarios médicos, dentales y gastos hospitalarios">
          Honorarios médicos, dentales y gastos hospitalarios
        </option>
        <option value="Gastos médicos por incapacidad o discapacidad">
          Gastos médicos por incapacidad o discapacidad
        </option>
        <option value="Gastos funerales">Gastos funerales</option>
        <option value="Donativos">Donativos</option>
        <option
          value="Intereses reales efectivamente pagados por créditos hipotecarios (casa
          habitación)"
        >
          Intereses reales efectivamente pagados por créditos hipotecarios (casa
          habitación)
        </option>
        <option value="Aportaciones voluntarias al SAR">
          Aportaciones voluntarias al SAR
        </option>
        <option value="Primas por seguros de gastos médicos">
          Primas por seguros de gastos médicos
        </option>
        <option value="Gastos por transportación escolar obligatoria">
          Gastos por transportación escolar obligatoria
        </option>
        <option
          value="Depósitos en cuenta para el ahorro, primas que tengan como base planes
          de pensiones"
        >
          Depósitos en cuenta para el ahorro, primas que tengan como base planes
          de pensiones
        </option>
        <option value="Pagos por servicios educativos (colegiaturas)">
          Pagos por servicios educativos (colegiaturas)
        </option>
        <option value="Por definir">Por definir</option>
      </select>
    );
  }
}

export default ListaUsoCFDI;
