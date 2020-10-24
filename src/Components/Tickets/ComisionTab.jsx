import React from "react";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";
import { comisionesSelector } from "./../../Redux/Selectors";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import NumberFormat from "react-number-format";

const ComisionTab = (props) => {
  const { handleDeleteClick } = props;
  const data = useSelector((state) => comisionesSelector(state));

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Tipo</TableCell>
          <TableCell align="left">Monto</TableCell>
          <TableCell align="left">Comentario</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell align="left">{row.Tipo}</TableCell>
            <TableCell align="left">
              <NumberFormat
                value={row.Monto}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>

            <TableCell align="left">{row.Comentarios}</TableCell>
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
            <TableCell align="left"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ComisionTab;
