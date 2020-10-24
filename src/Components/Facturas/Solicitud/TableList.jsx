import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import NumberFormat from "react-number-format";

const TableList = ({ data, selectedTakeObj }) => {
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
          <TableCell>ID</TableCell>
          <TableCell align="left">Agente</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">Monto</TableCell>
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
            <TableCell align="left">
              <NumberFormat
                value={row.Total_Solicitud}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>
            <TableCell align="left">{row.Creador}</TableCell>
            <TableCell align="left">{row.Atendedor}</TableCell>
            <TableCell align="left">
              {renderCell(row.Estatus_Facturacion)}
            </TableCell>
            <TableCell align="left">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => selectedTakeObj(row)}
              >
                <ArrowForwardIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
