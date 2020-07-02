import React from "react";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const FacturaTable = ({ data }) => {
  /* const data = useSelector((state) => facturaSelector(state));*/

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell align="left">RFC</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">Empresa</TableCell>
          <TableCell align="left">Concepto</TableCell>
          <TableCell align="left">Condicion Pago</TableCell>
          <TableCell align="left">Froma Pago</TableCell>
          <TableCell align="left">Monto</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data &&
          data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="left">{row.rfcFactura}</TableCell>
              <TableCell align="left">{row.clienteFactura}</TableCell>
              <TableCell align="left">{row.empresaFactura}</TableCell>
              <TableCell align="left">{row.conceptoFactura}</TableCell>
              <TableCell align="left">{row.condicionPago}</TableCell>
              <TableCell align="left">{row.formaPago}</TableCell>
              <TableCell align="left">{row.montoFactura}</TableCell>

              <TableCell align="left">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  /*onClick={() => handleDeleteClick(row._id)} */
                >
                  Borrar
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default FacturaTable;
