import React from 'react'
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    MenuItem,
    Select,
    TablePagination,
} from '@mui/material'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDQ4MTk5NjQsInVzZXJfaWQiOjJ9.JpFiamwIFz-Fq_aXUTWYrw8mykYOT2tUpThAvd_kczE';
// const apiUrl = 'localhost:3002/v1/invoice';

// const authAxios = axios.create({
//     baseURL: apiUrl,
//     headers: {
//         Authorization:`Bearer ${accessToken}`
//     }
// })

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
    // const [dataList, setDataList] = useState([]);
    // const [requestError, setRequestError] = useState();
    
    // SKIP BENTAR, URUS YG LOGIN DULU
    // const [content, setContent] = React.useState();

    // const fetchData = async () => {
    //     const { data } = await axios.get(
    //       `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
    //     );
    //     setContent(data);
    // };

    // const fetchData = useCallback(async () => {
    //     try {
    //         const result = await authAxios.get(`/v1/invoice`);
    //         setDataList(result.data);
    //     } catch (err) {
    //         setRequestError(err.message);
    //     }
    // })

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    // const bgSecondary = palette.secondary.main
    const bgWarning = palette.warning.main
    const bgSuccess = palette.success.main

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>List Invoice</Title>
                {/* <Select size="small" defaultValue="this_month">
                    <MenuItem value="this_month">This Month</MenuItem>
                    <MenuItem value="last_month">Last Month</MenuItem>
                </Select> */}
            </CardHeader>
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
                                Description
                            </TableCell>
                            <TableCell colSpan={2} align="center" sx={{ px: 0, fontSize: 14 }}>
                                Detail
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataList
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((data, index) => (
                            <TableRow key={index} hover>
                                {/* Kolom status */}
                                <TableCell colSpan={3} align="center" sx={{ px: 0, textTransform: 'capitalize' }}>
                                    {
                                        data.status === 'paid' ? ( 
                                            <Small bgcolor={bgPrimary}>{data.status} </Small> ) :
                                        data.status === 'late' ? (
                                            <Small bgcolor={bgError}>{data.status}</Small> ) :
                                        data.status === 'unpaid' ? (
                                            <Small bgcolor={bgError}>{data.status}</Small> ) :
                                        data.status === 'partial' ? (
                                            <Small bgcolor={bgWarning}>{data.status}</Small> ) :
                                        data.status === 'approve' ? (
                                            <Small bgcolor={bgSuccess}>{data.status}</Small> ) :
                                        (   <Small bgcolor={bgPrimary}>{data.status}</Small>)
                                    }
                                </TableCell>
                                {/* Kolom invoice id */}
                                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                                    {data.invoice}
                                </TableCell>
                                {/* Kolom nama client */}
                                <TableCell colSpan={2} sx={{ px: 0 }} align="center">
                                    {data.client}
                                </TableCell>
                                {/* Kolom invoice date */}
                                <TableCell colSpan={2} sx={{ px: 0 }} align="center">
                                    {data.invoiceDate}
                                </TableCell>
                                {/* Kolom due date */}
                                <TableCell colSpan={2} sx={{ px: 0 }} align="center">
                                    {data.dueDate}
                                </TableCell>
                                {/* Kolom amount */}
                                <TableCell align="center"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    Rp
                                    {data.amount > 999
                                        ? (data.amount / 1000000).toFixed(1) +
                                        'jt'
                                        : data.amount}
                                </TableCell>
                                {/* Kolom description */}
                                <TableCell colSpan={2} sx={{ px: 0 }} align="center">
                                    {data.description}
                                </TableCell>
                                {/* Kolom button edit */}
                                <TableCell sx={{ px: 0 }} align="center" colSpan={2}>
                                    <Link to={"/invoice/detail"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                                        <IconButton>
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
                    count={dataList.length}
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
        </Card>
    )
}

const dataList = [
    {
        status: 'paid',
        invoice: 'PSM/021/BCA/11',
        client: 'Jungkook',
        invoiceDate: '12/01/2022',
        dueDate: '12/12/2022',
        amount: 12000000,
        description: 'Berkas lengkap',
    },
    {
        status: 'unpaid',
        invoice: 'PSM/022/BCA/11',
        client: 'Yoongi',
        invoiceDate: '12/01/2022',
        dueDate: '12/12/2022',
        amount: 12000000,
        description: 'Berkas lengkap',
    },
    {
        status: 'late',
        invoice: 'PSM/023/BCA/11',
        client: 'Taehyung',
        invoiceDate: '12/01/2022',
        dueDate: '12/12/2022',
        amount: 12000000,
        description: 'Berkas lengkap',
    },
    {
        status: 'partial',
        invoice: 'PSM/024/BCA/11',
        client: 'Jimin',
        invoiceDate: '12/01/2022',
        dueDate: '12/12/2022',
        amount: 12000000,
        description: 'Berkas lengkap',
    },
    {
        status: 'approve',
        invoice: 'PSM/025/BCA/11',
        client: 'Jin',
        invoiceDate: '12/01/2022',
        dueDate: '12/12/2022',
        amount: 12000000,
        description: 'Berkas lengkap',
    },
    {
        status: 'late',
        invoice: 'PSM/025/BCA/11',
        client: 'RM',
        invoiceDate: '12/01/2022',
        dueDate: '12/12/2022',
        amount: 19000000,
        description: 'Berkas lengkap',
    },
]

export default TopSellingTable
