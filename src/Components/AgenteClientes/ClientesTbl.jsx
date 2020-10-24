import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";

import { AClientesSelector } from "./../../Redux/Selectors/index";

const ClientesTbl = () => {
  const data = useSelector((state) => AClientesSelector(state));
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell align="left">Agente</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">RFC</TableCell>
          <TableCell align="left">Direccion</TableCell>
          <TableCell align="left">email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell component="th" scope="row">
              {row._id}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.Agente}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.Nombre}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.RFC}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.direccion}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.email}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientesTbl;
