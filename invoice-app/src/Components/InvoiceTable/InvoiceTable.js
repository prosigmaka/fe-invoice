import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import clsx from 'clsx';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'status', headerName: 'Status', width: 70, 
    rowClassName: (params) => clsx('payment-status', {
      Unpaid: params.value == 'Unpaid',
      Paid: params.value == 'Paid',
      Partial: params.value == 'Partial'
    }),
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
  { id: 1, status: 'Unpaid', invoiceNum: 'PSM/01/22/X123', clientName:'Jungkook', invoiceDate: '11/01/2022', dueDate: '03/05/2022', amount: 500000, description: 'belum ada berkas yang dilengkapi', detailInvoice:'button' }
];

export default function InvoiceTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Box sx={{
        height: 300,
        width: 1,
         '& .payment-status.Unpaid': { border: 'solid 0px red', backgroundColor: '#ffaa91', padding: '8px 18px', borderRadius: '20px'},
         '& .payment-status.Partial': { border: 'solid 0px #1976d2', backgroundColor: '#baddff', padding: '8px 18px', borderRadius: '20px'},
         '& .payment-status.Paid': {border: 'solid 0px green', backgroundColor: '#a5ffcd', padding: '8px 18px', borderRadius: '20px'}
       
      }}>
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
    </div>
  );
}

// function checkStatus(status) {
//   return status === "Partial" ? {border: 'solid 0px #1976d2', backgroundColor: '#baddff', padding: '8px 18px', borderRadius: '20px' }
//       : status === "Paid" ? {border: 'solid 0px green', backgroundColor: '#a5ffcd', padding: '8px 18px', borderRadius: '20px' }
//       : status === "Unpaid" ? {border: 'solid 0px red', backgroundColor: '#ffaa91', padding: '8px 18px', borderRadius: '20px' }
//       : "red";
        
// }