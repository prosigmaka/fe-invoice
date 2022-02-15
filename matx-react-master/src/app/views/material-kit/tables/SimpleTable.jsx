import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                // textTransform: 'capitalize',
            },
        },
    },
}))

const ActionBox = styled('div')(() => ({
    paddingLeft: '40%',
    paddingRight: '60%',
    // marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const subscribarList = [
    {
        namefile: 'Invoice.pdf',
        date: '1 January, 2022',
    },
    {
        namefile: 'Kwitansi.pdf',
        date: '1 january, 2022',
    },
    {
        namefile: 'Faktur.pdf',
        date: '8 january, 2022',
    },
    {
        namefile: 'DesainProduct.jpg',
        date: '12 january, 2022',
        amount: 89000,
    },
    {
        namefile: 'DataClient.pdf',
        date: '12 january, 2022',
    },
    {
        namefile: 'AdditionalFeature.pdf',
        date: '12 january, 2022',
    },
]

const SimpleTable = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">File Name</TableCell>
                        <TableCell align="center">Upload Time</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">
                                {subscriber.namefile}
                            </TableCell>
                            <TableCell align="center">
                                {subscriber.date}
                            </TableCell>
                            <TableCell align="center">
                              <ActionBox>
                                {/* /form/id */}
                                {/* <Link to={"/form"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                                    <IconButton>
                                        <Icon color="primary">mode_edit</Icon>
                                    </IconButton>
                                </Link> */}
                                <Link to={"/invoice"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                                    <IconButton>
                                        <Icon color="primary">download</Icon>
                                    </IconButton>
                                </Link>
                                <Link to={"/invoice"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                                    <IconButton>
                                        <Icon color="error">close</Icon>
                                    </IconButton>
                                </Link>
                              </ActionBox>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
