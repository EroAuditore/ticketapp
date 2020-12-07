import React from "react";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { depositoSelector } from "./../../Redux/Selectors";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import NumberFormat from "react-number-format";

const DepositosTab = (props) => {
  const { handleDeleteClick } = props;
  const data = useSelector((state) => depositoSelector(state));

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Fechas</TableCell>
          <TableCell align="left">Nombre</TableCell>
          <TableCell align="left">Monto</TableCell>
          <TableCell align="left">Banco</TableCell>
          <TableCell align="left">Comnetarios</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell align="left">{row.fechaDepositoStr}</TableCell>
            <TableCell align="left">{row.nombreDeposito}</TableCell>
            <TableCell align="left">
              <NumberFormat
                value={row.depositoMonto}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>
            <TableCell align="left">{row.bancoDeposito}</TableCell>
            <TableCell align="left">{row.comentarioDeposito}</TableCell>

            <TableCell align="left">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => handleDeleteClick(row)}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DepositosTab;
