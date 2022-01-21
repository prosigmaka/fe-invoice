import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import clsx from 'clsx';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'status', headerName: 'Status', width: 100,
    cellClassName: (params) => clsx('payment-status', { 
      unpaid: params.value === "unpaid",
      paid: params.value === "paid",
      partial: params.value === "partial",
    }),
    renderCell: (params) => {
      // unpaid =  params.value === "unpaid",
      // paid = params.value === "paid",
      // partial = params.value === "partial"
      return (
        <Chip 
          variant = "outlined"
          label = {params.row.status}
          // color = {{unpaid} === "unpaid" && "primary" ||
          // {paid} === "paid" && "success" ||
          // {partial} === "partial" && "warning"
          // }
          sx = {{
              '{params.row.status} === "unpaid"': { color: "error" },
              '{params.row.status} === "paid"':  { color:"primary" },
              '{params.row.status} === "partial"': { color:"success" },
          }}
        />
      );
    }
  },
  { field: 'invoiceNum', headerName: 'Invoice', width: 130 },
  { field: 'clientName', headerName: 'Client', width: 130 },
  { field: 'invoiceDate', headerName: 'Invoice Date', width: 120, align:'center'},
  { field: 'dueDate', headerName: 'Due Date', width: 120, align:'center' },
  { field: 'amount', type:'currency', headerName: 'Amount', width: 120 },
  { field: 'description', headerName: 'Description', width: 150, },
  { field: 'detailInvoice', headerName: 'Detail', width: 80},
];

const rows = [
  { id: 1, status: 'unpaid', invoiceNum: 'PSM/01/22/X123', clientName:'Tiara', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'button' },
  { id: 2, status: 'paid', invoiceNum: 'PSM/01/22/X123', clientName:'Jungkook', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'button' }
];

export default function InvoiceTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
