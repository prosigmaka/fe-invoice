import React, { useEffect } from "react"
import { Breadcrumb} from 'app/components'
import { styled } from '@mui/system'
import TopSellingTable from './../../dashboard/shared/TopSellingTable'

import { useDispatch } from "react-redux";
import { deleteInvoiceDetail } from "app/redux/actions/invoiceAction";

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

const AppTable = () => {

    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(deleteInvoiceDetail())
    // }, [dispatch]);

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        // { name: 'Material', path: '/material' },
                        { name: 'Invoice' },
                    ]}
                />
            </div>
            {/* <SimpleCard title="Simple Table">
                <SimpleTable />
            </SimpleCard>
            <Box py="12px" /> */}
            {/* <SimpleCard title="Pagination Table">
                <PaginationTable />
            </SimpleCard> */}
            {/* <SimpleCard title="Invoice Table"> */}
            {/* <InvoiceTable />
            <Box py="12px" /> */}
            <TopSellingTable />
            {/* </SimpleCard> */}
        </Container>
    )
}

export default AppTable
