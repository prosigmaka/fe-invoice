import React from 'react'
import { Breadcrumb } from 'app/components'
import { styled } from '@mui/system'
import TopSellingTable from './../../dashboard/shared/TopSellingTable'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    overflowX: 'auto',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const DetailPage = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Invoice', path: '/invoice' },
                        { name: 'Detail' },
                    ]}
                />
            </div>
            <TopSellingTable />
        </Container>
    )
}

export default DetailPage