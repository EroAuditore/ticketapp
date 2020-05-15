import React from "react";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";
import { retornoSelector } from "./../../Redux/Selectors";

const RetornosTab = (props) => {
  const { handleDeleteClick } = props;
  const data = useSelector((state) => retornoSelector(state));

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No.</TableCell>

          <TableCell align="left">Nombre</TableCell>
          <TableCell align="left">Entidad</TableCell>
          <TableCell align="left">Cuenta</TableCell>
          <TableCell align="left">Monto</TableCell>
          <TableCell align="left">Comentario</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell component="th" scope="row">
              {row._id}
            </TableCell>
            <TableCell align="left">{row.nombreRetorno}</TableCell>
            <TableCell align="left">{row.entidadRetorno}</TableCell>
            <TableCell align="left">{row.cuentaRetorno}</TableCell>
            <TableCell align="left">{row.retornoMonto}</TableCell>
            <TableCell align="left">{row.comentarioRetorno}</TableCell>
            <TableCell align="left">
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDeleteClick(row._id)}
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

export default RetornosTab;
