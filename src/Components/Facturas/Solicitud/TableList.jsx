import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { Chip } from "@material-ui/core";

const TableList = ({ data, toggleDrawer }) => {
  if (!data) return <div></div>;

  const renderCell = (item) => {
    return (
      <Chip
        variant="outlined"
        size="small"
        label="peding"
        style={{
          border: "1px solid rgb(251, 140, 0)",
          color: "rgb(251, 140, 0)",
        }}
      />
    );
  };
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>

          <TableCell align="left">Agente</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">Creado por</TableCell>
          <TableCell align="left">Atendido por</TableCell>
          <TableCell align="left">Estatus</TableCell>
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
            <TableCell align="left">{row.Cliente}</TableCell>
            <TableCell align="left">{row.CreadoPor}</TableCell>
            <TableCell align="left">{row.AtendidoPor}</TableCell>
            <TableCell align="left">{renderCell(row.Estatus)}</TableCell>
            <TableCell align="left">
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={toggleDrawer}
              >
                Validar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
