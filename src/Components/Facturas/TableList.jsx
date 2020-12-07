import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import FacturaEstatus from "./../Common/FacturaEstatus";
import Moment from 'react-moment';

const TableList = ({ data, toggleTake }) => {
  if (!data) return <div></div>;
  
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>

          <TableCell align="left">Agente</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">RFC</TableCell>
          <TableCell align="left">Fecha</TableCell>
          <TableCell align="left">Usuario</TableCell>
          <TableCell align="left">Estatus factura</TableCell>
          <TableCell align="left">Estatus Pago</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell component="th" scope="row">
              {row._id}
            </TableCell>
            <TableCell align="left">{row.Agente}</TableCell>
            <TableCell align="left">{row.cliente}</TableCell>
            <TableCell align="left">{row.RFC}</TableCell>
            <TableCell align="left">
              <Moment format="YYYY/MM/DD">
                  {row.fecha}
              </Moment>
            </TableCell>
            <TableCell align="left">{row.userName}</TableCell>
            <TableCell align="left">
              <FacturaEstatus data={row.estatus} />
            </TableCell>
            <TableCell align="left">
              <FacturaEstatus data={row.estatusDeposito} />
            </TableCell>
            <TableCell align="left">
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => toggleTake(row)}
              >
                Tomar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
