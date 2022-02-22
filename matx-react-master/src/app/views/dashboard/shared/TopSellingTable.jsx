import React, { useEffect } from "react"
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    CircularProgress,
} from '@mui/material'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceList, detailInvoice, getInvoiceDetail } from "app/redux/actions/invoiceAction";

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const DataTable = styled(Table)(() => ({
    minWidth: 400,
    overflowX: 'auto',
    position: 'static',
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: '20px',
        padding: '5px 10px',
        overflow: 'hidden',
        background: 'transparent',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius:'50px',
        fontSize: '13px',
        boxShadow:
            '0 0 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        // paddingLeft: '16px !important',
    },
}))

const Small = styled('small')(({ bgcolor }) => ({
    color: bgcolor,
    borderColor: bgcolor,
}))

const TopSellingTable = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    // -------------------------------

    const dispatch = useDispatch();
    const invoiceData = useSelector((state) => state.InvoiceReducer.getInvoiceList);
    const errorData = useSelector((state) => state.InvoiceReducer.errorInvoiceList);

    useEffect(() => {
        console.log("1. use effect getInvoiceList");
        console.log(invoiceData);
        console.log(invoiceData.length);
        // console.log(invoiceData.data);
        // console.log(getInvoiceList.data);
        dispatch(getInvoiceList());
        // dispatch(getInvoiceDetail());
    }, [dispatch]);

    // --------------------------------

    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgWarning = palette.warning.main
    const bgSuccess = palette.success.main

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>List Invoice</Title>
            </CardHeader>
            {invoiceData ? (
            <Box overflowX="auto">
                <DataTable>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={3} align="center" sx={{ px: 0, fontSize: 14 }}>
                                Status
                            </TableCell>
                            <TableCell colSpan={2} align="center" sx={{ px: 0, fontSize: 14}}>
                                Invoice
                            </TableCell>
                            <TableCell colSpan={2} align="center" sx={{ px: 0, fontSize: 14 }}>
                                Client
                            </TableCell>
                            <TableCell colSpan={2} align="center" sx={{ px: 0, fontSize: 14 }}>
                                Invoice Date
                            </TableCell>
                            <TableCell colSpan={2} align="center" sx={{ px: 0, fontSize: 14 }}>
                                Due Date
                            </TableCell>
                            <TableCell colSpan={2} align="center" sx={{ px: 0, fontSize: 14 }}>
                                Amount
                            </TableCell>
                            <TableCell colSpan={2} align="center" sx={{ px: 0, fontSize: 14 }}>
                                Detail
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoiceData
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((inv) => (
                            <TableRow key={inv.id} hover>
                                {/* Kolom status */}
                                <TableCell colSpan={3} align="center" sx={{ px: 0, textTransform: 'capitalize' }}>
                                    {
                                        inv.invoice_status === 'paid' ? ( 
                                            <Small bgcolor={bgPrimary}>{inv.invoice_status} </Small> ) :
                                        inv.invoice_status === 'late' ? (
                                            <Small bgcolor={bgError}>{inv.invoice_status}</Small> ) :
                                        inv.invoice_status === 'unpaid' ? (
                                            <Small bgcolor={bgError}>{inv.invoice_status}</Small> ) :
                                        inv.invoice_status === 'partial' ? (
                                            <Small bgcolor={bgWarning}>{inv.invoice_status}</Small> ) :
                                            inv.invoice_status === 'approve' ? (
                                            <Small bgcolor={bgSuccess}>{inv.invoice_status}</Small> ) :
                                        (   <Small bgcolor={bgPrimary}>{inv.invoice_status}</Small>)
                                    }
                                    {/* <Small bgcolor={bgError}>unpaid</Small> */}
                                </TableCell>
                                {/* Kolom invoice id */}
                                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                                    {inv.invoice_num}
                                </TableCell>
                                {/* Kolom nama client */}
                                <TableCell colSpan={2} sx={{ px: 0 }} align="center">
                                    {inv.client_name}
                                </TableCell>
                                {/* Kolom invoice date */}
                                <TableCell colSpan={2} sx={{ px: 0 }} align="center">
                                    {inv.invoice_date}
                                </TableCell>
                                {/* Kolom due date */}
                                <TableCell colSpan={2} sx={{ px: 0 }} align="center">
                                    {inv.due_date}
                                </TableCell>
                                {/* Kolom amount */}
                                <TableCell align="center"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {inv.item_total}
                                    {/* Rp
                                    {data.amount > 999
                                        ? (data.amount / 1000000).toFixed(1) +
                                        'jt'
                                        : data.amount} */}
                                </TableCell>
                                <TableCell sx={{ px: 0 }} align="center" colSpan={2}>
                                    {/* <Link to={"/invoice/detail"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                                        <IconButton>
                                            <ReadMoreIcon color="primary" />
                                        </IconButton>
                                    </Link> */}
                                    <Link to={"/invoice/detail/" + inv.id} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                                        <IconButton 
                                            type="button"
                                            onClick={() => {
                                                dispatch(detailInvoice(inv));
                                                // dispatch(getInvoiceDetail(inv.id));
                                            }}
                                        >
                                            <ReadMoreIcon color="primary" />
                                        </IconButton>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </DataTable>
                <TablePagination
                    sx={{ px: 2 }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={invoiceData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> 
            </Box>
            ) : (
                <div>
                    {errorData ? (
                        <h5>{errorData}</h5>
                        ) : (<CircularProgress />
                    )}
                </div>
            )}
            


            {/* <Box>
                <DataTable>
                    <p>GIMANA TAMPIL GAK SI DATA DATANYA?</p>
                    {/* <p>{props.client_name}</p> */}
                    {/* console.log(invoiceData.length); */}
                    {/* {invoiceData ? (
                        invoiceData.map((inv) => {
                            return (
                                <div key={inv.id}>
                                    <p>{inv.client_name}</p>
                                    <p>{inv.ordered_by}</p>
                                </div>
                            );
                        })
                    ) : (
                        <div>
                            {invoiceData.errorInvoiceList ? (
                                <h5>{invoiceData.errorUsersList}</h5>
                                ) : (<CircularProgress /> 
                            )}
                        </div>
                    )}
                </DataTable>
            </Box> */} 
        </Card>
    )
}
export default TopSellingTable
