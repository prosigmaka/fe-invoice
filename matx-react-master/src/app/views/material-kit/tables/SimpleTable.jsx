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
                textTransform: 'capitalize',
            },
        },
    },
}))

const subscribarList = [
    {
        namefile: 'Invoice.pdf',
        date: '1 January, 2022',
    },
    {
        namefile: 'Kwitansi.pdf',
        date: '1 january, 2019',
    },
    {
        namefile: 'Faktur.pdf',
        date: '8 january, 2019',
    },
    {
        namefile: 'DesainProduct.jpg',
        date: '12 january, 2019',
        amount: 89000,
    },
    {
        namefile: 'DataClient.pdf',
        date: '12 january, 2019',
    },
    {
        namefile: 'AdditionalFeature.pdf',
        date: '12 january, 2019',
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
                                {/* /form/id */}
                                <Link to={"/form"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                                    <IconButton>
                                        <Icon color="primary">mode_edit</Icon>
                                    </IconButton>
                                </Link>
                                <IconButton>
                                    <Icon color="primary">download</Icon>
                                </IconButton>
                                <IconButton>
                                    <Icon color="error">close</Icon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
