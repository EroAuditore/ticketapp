import React from "react";
import NumberFormat from "react-number-format";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

import { useSelector } from "react-redux";

import MovimientoEstatus from "./../../Common/MovimientoEstatus";
import { movimientoSelector } from "./../../../Redux/Selectors/index";

const MovimientoView = () => {
  const {
    Agente,
    Cliente,
    cantidadTotal,
    estatusDeposito,
    estatusRetorno,
    estatusComision,
  } = useSelector((state) => movimientoSelector(state));

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
          <TableCell>
            <Typography variant="body1" gutterBottom>
              Monto Total:
            </Typography>
          </TableCell>
          <TableCell>
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

export default MovimientoView;
