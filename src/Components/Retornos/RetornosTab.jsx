import React from "react";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";
import { retornoSelector } from "./../../Redux/Selectors";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import NumberFormat from "react-number-format";

const RetornosTab = (props) => {
  const { handleDeleteClick } = props;
  const data = useSelector((state) => retornoSelector(state));

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Nombre</TableCell>
          <TableCell align="left">Tipo retorno</TableCell>
          <TableCell align="left">Banco</TableCell>
          <TableCell align="left">Cuenta</TableCell>
          <TableCell align="left">Swift</TableCell>
          <TableCell align="left">Dir. Banco</TableCell>
          <TableCell align="left">Monto</TableCell>
          <TableCell align="left">Comentario</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell align="left">{row.nombreRetorno}</TableCell>
            <TableCell align="left">{row.formaRetorno}</TableCell>
            <TableCell align="left">{row.Banco}</TableCell>
            <TableCell align="left">{row.cuentaRetorno}</TableCell>
            <TableCell align="left">{row.codigoSwift}</TableCell>
            <TableCell align="left">{row.direccionBanco}</TableCell>
            <TableCell align="left">
              <NumberFormat
                value={row.retornoMonto}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>
            <TableCell align="left">{row.comentarioRetorno}</TableCell>
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

export default RetornosTab;
