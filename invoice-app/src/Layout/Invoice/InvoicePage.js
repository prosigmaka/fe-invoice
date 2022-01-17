import { Container } from '@mui/material';
import * as React from 'react';
import InvoiceTable from '../../Components/InvoiceTable/InvoiceTable';
import ButtonCreate from '../../Components/ButtonCreate/ButtonCreate';

const InvoicePage = () => {
    return(
        <>
        <Container>
            <h3>Invoice Page</h3>
            <ButtonCreate />
            <InvoiceTable />
        </Container>
        </>
    )
}
export default InvoicePage