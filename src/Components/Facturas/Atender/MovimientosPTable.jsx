import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { Chip } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { movimientosPSelector } from "../../../Redux/Selectors";
import MovimientoEstatus from './../../Common/MovimientoEstatus';
import Moment from 'react-moment';

const MovimientosPTable = ({ toggleTake }) => {

  const data = useSelector((state) => movimientosPSelector(state));


  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>

          <TableCell align="left">Agente</TableCell>
          <TableCell align="left">Cliente</TableCell>
          <TableCell align="left">Fecha</TableCell>
          <TableCell align="left">Cantidad Total</TableCell>
          <TableCell align="left">Deposito</TableCell>
          <TableCell align="left">Retorno</TableCell>
          <TableCell align="left">Comision</TableCell>
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

              <Moment format="YYYY/MM/DD">
                {row.fecha}
              </Moment>
            </TableCell>
            <TableCell align="left">
              <NumberFormat
                value={row.cantidadTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </TableCell>
            <TableCell align="left">
              <MovimientoEstatus data={row.estatusDeposito} />
            </TableCell>
            <TableCell align="left">
              <MovimientoEstatus data={row.estatusRetorno} />
            </TableCell>
            <TableCell align="left">
              <MovimientoEstatus data={row.estatusComision} />
            </TableCell>
            <TableCell align="left">
              <Button

                variant="contained"
                size="small"
                color="primary"
              /*onClick={() => toggleTake(row)}*/
              >
                Asignar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MovimientosPTable;
