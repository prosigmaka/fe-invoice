import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Span } from 'app/components/Typography'
import { Box, styled } from '@mui/system'
import ClientForm from './ClientForm'
import InvoiceForm from './InvoiceForm'
import POForm from './POForm'
import { Divider, Button, Icon } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
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

const AppForm = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Client Data">
                <Divider className="my-4" />
                <ClientForm/>
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="PO Data">
                <Divider className="my-4"/>
                <POForm />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Invoice Data">
                <Divider className="my-4"/>
                <InvoiceForm />
            </SimpleCard>
            <Box py="12px" />
            <Button color="primary" variant="contained" type="submit">
                <Icon>save</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                    Save
                </Span>
            </Button>
        </Container>
    )
}

export default AppForm
