import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

const TableList = ({ data, onEdit }) => {
  if (!data) return <div></div>;

  const renderCell = (item) => {
    const renderClass =
      item == "1" ? "badge badge-success" : "badge badge-secondary";
    const renderText = item == "1" ? "Activo" : "Inactivo";

    return (
      <h6>
        <span className={renderClass}>{renderText}</span>
      </h6>
    );
  };

  const renderCellModule = (item) => {
    return item === "1" ? <CheckIcon /> : <span />;
  };

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No.</TableCell>
          <TableCell align="left">Nombre</TableCell>
          <TableCell align="left">Usuario</TableCell>
          <TableCell align="left">Area</TableCell>
          <TableCell align="left">Movimientos</TableCell>
          <TableCell align="left">Facturacion</TableCell>
          <TableCell align="left">Depositos</TableCell>
          <TableCell align="left">Retornos</TableCell>
          <TableCell align="left">Configuracion</TableCell>
          <TableCell align="left">Estatus</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.ID_usuario}>
            <TableCell component="th" scope="row">
              {row.ID_usuario}
            </TableCell>
            <TableCell align="left">{row.Nombre}</TableCell>
            <TableCell align="left">{row.Username}</TableCell>
            <TableCell align="left">{row.Area}</TableCell>
            <TableCell align="left">
              {renderCellModule(row.movimientos)}
            </TableCell>
            <TableCell align="left">
              {renderCellModule(row.facturacion)}
            </TableCell>
            <TableCell align="left">
              {renderCellModule(row.depositos)}
            </TableCell>
            <TableCell align="left">{renderCellModule(row.retornos)}</TableCell>
            <TableCell align="left">
              {renderCellModule(row.configuracion)}
            </TableCell>
            <TableCell align="left">{renderCell(row.activo)}</TableCell>
            <TableCell align="left">
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => onEdit(row)}
              >
                Editar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
