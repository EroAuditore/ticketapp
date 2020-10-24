import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import FacturaEstatus from "./../Common/FacturaEstatus";

const TableList = ({ data, toggleTake }) => {
  if (!data) return <div></div>;

  const renderCell = (item) => {
    let renderText = "";
    let renderClass = "";
    switch (item) {
      case "1": {
        renderText = "Pendiente";
        renderClass = "badge badge-secondary";
        break;
      }
      case "2": {
        renderText = "Atendiendo";
        renderClass = "badge badge-warning";
        break;
      }
      case "3": {
        renderText = "Finalizado";
        renderClass = "badge badge-success";
        break;
      }

      default: {
        renderText = "Pendiente";
        renderClass = "badge badge-secondary";
        break;
      }
    }
    /*
    const renderClass =
      item == "1" ? "badge badge-success" : "badge badge-secondary";
    const renderText = item == "1" ? "Activo" : "Inactivo"; */

    return (
      <h6>
        <span className={renderClass}>{renderText}</span>
      </h6>
    );
  };

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>

          <TableCell align="left">Agente</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">RFC</TableCell>
          <TableCell align="left">Usuario</TableCell>
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
            <TableCell align="left">{row.cliente}</TableCell>
            <TableCell align="left">{row.RFC}</TableCell>
            <TableCell align="left">{row.userName}</TableCell>
            <TableCell align="left">
              <FacturaEstatus data={row.estatus} />
            </TableCell>
            <TableCell align="left">
              <Button
                variant="outlined"
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
