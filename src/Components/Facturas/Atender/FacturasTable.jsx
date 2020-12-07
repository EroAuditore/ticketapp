import React from "react";
import Button from "@material-ui/core/Button";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";

import { useSelector } from "react-redux";
import { attFacturasSelector } from "./../../../Redux/Selectors";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import NumberFormat from "react-number-format";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FacturaEstatus from "./../../Common/FacturaEstatus";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 800,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const FacturasTable = ({ OnUploadXML, OnUploadPDF }) => {
  const classes = useStyles();
  const data = useSelector((state) => attFacturasSelector(state));

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Moneda </TableCell>
          <TableCell align="left">RFC </TableCell>
          <TableCell align="left">Razon social</TableCell>
          <TableCell align="left">Sub Total</TableCell>
          <TableCell align="left">iva</TableCell>
          <TableCell align="left">Total</TableCell>
          <TableCell align="left">Empresa facturadora</TableCell>
          <TableCell align="left">Condicion Pago</TableCell>
          <TableCell align="left">Froma Pago</TableCell>
          <TableCell align="left">Estatus</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row._id}>
            <TableCell align="left">{row.moneda}</TableCell>
            <TableCell align="left">{row.RFC}</TableCell>
            <TableCell align="left">{row.Cliente}</TableCell>
            <TableCell align="left">
              <NumberFormat
                value={row.subTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>
            <TableCell align="left">
              <NumberFormat
                value={row.iva}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>
            <TableCell align="left">
              <NumberFormat
                value={row.montoTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>
            <TableCell align="left">{row.empresaFacturadora}</TableCell>
            <TableCell align="left">{row.condicionPago}</TableCell>
            <TableCell align="left">{row.formaPago}</TableCell>
            <TableCell align="left">
              <FacturaEstatus data={row.estatus} />
            </TableCell>

            <TableCell align="left">
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
                onClick={() => OnUploadXML(row)}
                size="small"
              >
                XML
              </Button>
            </TableCell>
            <TableCell align="left">
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
                onClick={() => OnUploadPDF(row)}
                size="small"
              >
                PDF
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FacturasTable;
