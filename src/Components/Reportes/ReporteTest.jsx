import React from 'react';


import MaterialTable from 'material-table'

const ReporteTest = () => {
    return (<MaterialTable
        columns={[
            { title: 'Agente', field: 'agente' },
            { title: 'Cliente', field: 'cliente' },
            { title: 'Facturas totales', field: 'totalFacturas', type: 'numeric' },
            { title: 'Facturas pendientes de pago', field: 'facturasPendintes', type: 'numeric' },
            { title: 'Monto Facturado', field: 'mFacturado', type: 'currency' },
            { title: 'Comision de agente', field: 'cAgente', type: 'currency' },
            { title: 'Comision oficina', field: 'cOficina', type: 'currency' },


        ]}
        data={[
            { agente: 'Jair', cliente: 'Tenuuk', totalFacturas: 260, facturasPendintes: 63, mFacturado: 1200000.00, cAgente: 20000.50, cOficina: 30000.00 },
            { agente: 'Jair', cliente: 'Italtronik', totalFacturas: 350, facturasPendintes: 10, mFacturado: 1400000.00, cAgente: 10000.50, cOficina: 20000.00 },
            { agente: 'Jair', cliente: 'Peta', totalFacturas: 100, facturasPendintes: 0, mFacturado: 1600000.00, cAgente: 40000.50, cOficina: 10000.00 },
        ]}
        title="Facturacion por Agente/Cliente"

        options={{
            exportButton: true,
            search: false
        }}
    />);
}

export default ReporteTest;