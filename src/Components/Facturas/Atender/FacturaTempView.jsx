import React from "react";
import NumberFormat from "react-number-format";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import { facturaTempSelector } from "../../../Redux/Selectors";
import { useSelector } from "react-redux";
import FacturaEstatus from "./../../Common/FacturaEstatus";

const FacturaTempView = () => {
  const data = useSelector((state) => facturaTempSelector(state));
  const {
    RFC,
    cliente,
    empresaFacturadora,
    tipoComprobante,
    condicionPago,
    usoCFDI,
    metodoPago,
    formaPago,
    email,
    direccionCliente,
    subTotal,
    iva,
    montoTotal,
    estatus,
    moneda,
  } = data;
  return (
    <Table aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              RFC
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {RFC}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body1" gutterBottom>
              Razon social
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {cliente}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Empresa facturadora:
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body2" gutterBottom color="textSecondary">
              {empresaFacturadora}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Tipo de comprobante
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {tipoComprobante}
            </Typography>
          </TableCell>

          <TableCell align="left">
            <Typography variant="body1" gutterBottom>
              Condicion Pago
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {condicionPago}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Uso CFDI
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {usoCFDI}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body1" gutterBottom>
              Metodo de Pago
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {metodoPago}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Forma de Pago
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {formaPago}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body1" gutterBottom>
              Moneda
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {moneda}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Sub total
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              <NumberFormat
                value={subTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body1" gutterBottom>
              Iva
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              <NumberFormat
                value={iva}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body1" gutterBottom>
              Total
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              <NumberFormat
                value={montoTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default FacturaTempView;
