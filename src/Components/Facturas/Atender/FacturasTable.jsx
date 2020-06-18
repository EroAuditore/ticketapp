import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";

import { useSelector } from "react-redux";
import { attFacturasSelector } from "./../../../Redux/Selectors";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const FacturasTable = ({ onclick }) => {
  const data = useSelector((state) => attFacturasSelector(state));

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell align="left">RFC</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">Empresa</TableCell>
          <TableCell align="left">Monto total</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell component="th" scope="row">
              {row._id}
            </TableCell>
            <TableCell align="left">{row.RFC}</TableCell>
            <TableCell align="left">{row.Cliente}</TableCell>
            <TableCell align="left">{row.empresaFacturadora}</TableCell>
            <TableCell align="left">{row.montoTotal}</TableCell>

            <TableCell align="left">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => onclick(row)}
              >
                <ArrowForwardIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FacturasTable;
