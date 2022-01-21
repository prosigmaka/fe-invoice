import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import InfoIcon from '@mui/icons-material/Info';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'status', headerName: 'Status', width: 100,
    // cellClassName: (params) => clsx('payment-status', { 
    //   unpaid: params.value === "unpaid",
    //   paid: params.value === "paid",
    //   partial: params.value === "partial",
    // }),
    renderCell: (params) => {
        switch (params.value) {
          case "unpaid" : return <Chip variant='outlined' label={params.row.status} color="error"/>;
          case "paid" : return <Chip variant='outlined' label={params.row.status} color="success"/>;
          case "partial" : return <Chip variant='outlined' label={params.row.status} color="warning"/>;
          case "late" : return <Chip variant='outlined' label={params.row.status} color="error"/>;
          case "approve" : return <Chip variant='outlined' label={params.row.status} color="primary"/>;
        }
      }
  },
  { field: 'invoiceNum', headerName: 'Invoice', width: 130 },
  { field: 'clientName', headerName: 'Client', width: 130 },
  { field: 'invoiceDate', headerName: 'Invoice Date', width: 120, align:'center'},
  { field: 'dueDate', headerName: 'Due Date', width: 120, align:'center' },
  { field: 'amount', type:'currency', headerName: 'Amount', width: 100 },
  { field: 'description', headerName: 'Description', width: 150, },
  { field: 'detailInvoice', headerName: 'Detail', width: 80, 
    renderCell: () => {
      return (
        <InfoIcon />
      );
    }
  },
];

const rows = [
  { id: 1, status: 'unpaid', invoiceNum: 'PSM/01/22/X123', clientName:'Jungkook', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'' },
  { id: 2, status: 'paid', invoiceNum: 'PSM/01/22/X123', clientName:'Taehyung', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'' },
  { id: 3, status: 'late', invoiceNum: 'PSM/01/22/X123', clientName:'Jimin', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'' },
  { id: 4, status: 'approve', invoiceNum: 'PSM/01/22/X123', clientName:'RM', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'' },
  { id: 5, status: 'partial', invoiceNum: 'PSM/01/22/X123', clientName:'Suga', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'' },
];

export default function InvoiceTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        search
        checkboxSelection
      />
    </div>
  );
}
