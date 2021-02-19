import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import {
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Paper,
    Tab,
    Tabs,
    Box,
    Fab,
} from "@material-ui/core";
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';
import ChartDoughnut from './ChartDoughnut';
import ChartAgenteComision from './ChartAgenteComision';
import ChartDoughnutMovimiento from './CharDoughnutMovimiento';
import ChartDoughnutFacturas from './ChartDoughnutFacturas';
import ReporteTest from './../Reportes/ReporteTest';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paper: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(3),
    },
    paperTitle: {
        padding: theme.spacing(1),
        textAlign: "left",
        color: theme.palette.text.secondary,
    },
    paperModal: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(3),
    },
    content: {
        height: 220,
    },


}));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className={classes.paperTitle}>
                            <h2>Dashboard</h2>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardHeader
                                title="Facturas anuales"
                            />
                            <CardContent className={classes.content}>
                                <ChartLine />
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={6}>

                        <Card>
                            <CardHeader
                                title="Facturas por Cliente"
                            />
                            <CardContent className={classes.content}>
                                <ChartBar />
                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item xs={4} >

                        <Card>
                            <CardHeader
                                title="Estatus tesoreria"
                            />
                            <CardContent className={classes.content}>
                                <ChartDoughnutMovimiento />
                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item xs={4} >

                        <Card>
                            <CardHeader
                                title="Estatus facturación"
                            />
                            <CardContent className={classes.content}>
                                <ChartDoughnutFacturas />
                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item xs={4} >
                        <Card>
                            <CardHeader
                                title="Clientes facturación"
                            />
                            <CardContent className={classes.content}>
                                <ChartDoughnut />
                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid item xs={12}>

                        <Card>
                            <CardHeader
                                title="Agentes comisión"
                            />
                            <CardContent className={classes.content}>
                                <ChartAgenteComision />
                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item xs={12}>
                        <ReporteTest />

                    </Grid>
                </Grid>
            </Container>
        </>);
}

export default Dashboard;