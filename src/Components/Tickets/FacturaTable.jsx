import React from "react";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

import FacturaEstatus from './../Common/FacturaEstatus';


const FacturaTable = ({ onDelete, handleAddClick }) => {
  let data = useSelector((state) => state.movimientos.facturas);


  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Moneda </TableCell>
          <TableCell align="left">RFC </TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">Empresa</TableCell>
          <TableCell align="left">Concepto</TableCell>
          <TableCell align="left">Condicion Pago</TableCell>
          <TableCell align="left">Froma Pago</TableCell>
          <TableCell align="left">Monto</TableCell>
          <TableCell align="left">Estatus</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data &&
          data.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="left">{row.moneda}</TableCell>
              <TableCell align="left">{row.RFC}</TableCell>
              <TableCell align="left">{row.cliente}</TableCell>
              <TableCell align="left">{row.empresaFacturadora}</TableCell>
              <TableCell align="left">{row.conceptoFactura}</TableCell>
              <TableCell align="left">{row.condicionPago}</TableCell>
              <TableCell align="left">{row.formaPago}</TableCell>
              <TableCell align="left">
                <NumberFormat
                  value={row.montoTotal}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </TableCell>

              <TableCell align="left">
              <FacturaEstatus data={row.estatus} />
            </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default FacturaTable;
