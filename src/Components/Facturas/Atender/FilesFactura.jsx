import React from "react";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";

import { facturaFileSelector } from "./../../../Redux/Selectors/index";

const FilesFactura = ({ handleDownloadClick }) => {
  const data = useSelector((state) => facturaFileSelector(state));
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell align="left">Nombre</TableCell>

          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell component="th" scope="row">
              {row._id}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.fileName}
            </TableCell>
            <TableCell component="th" scope="row">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDownloadClick(row)}
              >
                Descargar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FilesFactura;
