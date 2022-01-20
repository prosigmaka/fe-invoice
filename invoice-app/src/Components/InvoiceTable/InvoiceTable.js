import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import clsx from 'clsx';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'status', headerName: 'Status', width: 100,
    // cellClassName: (params) => clsx('payment-status', { 
    //   unpaid: params.value === "unpaid",
    //   paid: params.value === "paid",
    //   partial: params.value === "partial",
    // }),
    renderCell: (params) => {
      // unpaid =  params.value === "unpaid",
      // paid = params.value === "paid",
      // partial = params.value === "partial"
      return (
        <Chip 
          variant = "outlined"
          label = {params.row.status}
          color = "primary"
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
  { field: 'detailInvoice', headerName: 'Detail', width: 80 },
];

const rows = [
  { id: 1, status: 'unpaid', invoiceNum: 'PSM/01/22/X123', clientName:'Jungkook', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'button' },
  { id: 2, status: 'paid', invoiceNum: 'PSM/01/22/X123', clientName:'Jungkook', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'button' }
];

export default function InvoiceTable() {
  return (
    // <div style={{ height: 400, width: '100%' }}>
      <Box sx={{
        height: 500,
        width: '100%',
         '& .payment-status.unpaid': { border: 'solid 0px transparent', backgroundColor: '#ffaa91', padding: '8px 18px', borderRadius: '0px'},
         '& .payment-status.partial': { border: 'solid 0px white', backgroundColor: '#baddff', padding: '8px 18px', borderRadius: '0px'},
         '& .payment-status.paid': { border: 'solid 0px white', backgroundColor: '#a5ffcd', padding: '8px 18px', borderRadius: '0px'}
      }}>
        {/* <Chip 
          variant = "outlined"
          label = {rows.status}
          sx={{
          '& .payment-status.unpaid': { color:"primary" },
          '& .payment-status.partial':  { color:"primary" },
          '& .payment-status.paid': { color:"primary" },
        }}
        /> */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        // sx={{
        //   '& .Unpaid': { border: 'solid 0px red', backgroundColor: '#ffaa91', padding: '8px 18px', borderRadius: '20px'},
        //   '& .Partial': { border: 'solid 0px #1976d2', backgroundColor: '#baddff', padding: '8px 18px', borderRadius: '20px'},
        //   '& .Paid': {border: 'solid 0px green', backgroundColor: '#a5ffcd', padding: '8px 18px', borderRadius: '20px'}
        // }}
      />
      </Box>
    // </div>
  );
}
