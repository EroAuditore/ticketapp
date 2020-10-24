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
import { useSelector } from "react-redux";
import { partidaSelector, facturaSelector } from "../../../Redux/Selectors";

const PartidaList = ({ factura }) => {
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
  const dataFactura = useSelector((state) => facturaSelector(state));

  const selectedFactura = dataFactura.filter(
    (fact) => fact._id === factura._id
  );

  const data = selectedFactura[0].partidas;

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Cantidad</TableCell>
          <TableCell align="left">Clave unidad</TableCell>
          <TableCell align="left">Clave PS</TableCell>
          <TableCell align="left">Descripcion</TableCell>
          <TableCell align="left">Valor unitario</TableCell>
          <TableCell align="left">Importe</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="left">{row.cantidad}</TableCell>
              <TableCell align="left">{row.claveUnidad}</TableCell>
              <TableCell align="left">{row.clavePs}</TableCell>
              <TableCell align="left">{row.descripcion}</TableCell>
              <TableCell align="left">
                <NumberFormat
                  value={row.valorUnitario}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </TableCell>
              <TableCell align="left">
                <NumberFormat
                  value={row.importe}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </TableCell>

              <TableCell align="left">
                <IconButton
                  color="primary"
                  aria-label="Delete"
                  component="span"
                  /*onClick={() => selectedTakeObj(row)} */
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

export default PartidaList;
