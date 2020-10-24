import React from "react";
import NumberFormat from "react-number-format";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

import { useSelector } from "react-redux";
import { facturaMoviemntoSelector } from "./../../../Redux/Selectors/index";
import MovimientoEstatus from "./../../Common/MovimientoEstatus";

const MovimientoFormView = () => {
  const {
    Agente,
    Cliente,
    cantidadTotal,
    estatusDeposito,
    estatusRetorno,
    estatusComision,
  } = useSelector((state) => facturaMoviemntoSelector(state));

  return (
    <Table aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Agente
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {Agente}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body1" gutterBottom>
              Cliente
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {Cliente}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <Typography variant="body1" gutterBottom>
              Monto Total:
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              <NumberFormat
                value={cantidadTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Deposito:
            </Typography>
          </TableCell>
          <TableCell>
            <MovimientoEstatus data={estatusDeposito} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Retorno:
            </Typography>
          </TableCell>
          <TableCell>
            <MovimientoEstatus data={estatusRetorno} />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Comision:
            </Typography>
          </TableCell>
          <TableCell>
            <MovimientoEstatus data={estatusComision} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MovimientoFormView;
