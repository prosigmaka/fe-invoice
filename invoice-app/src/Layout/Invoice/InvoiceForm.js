import { Grid, Container, Card, CardContent, Divider, TextField } from '@mui/material';
import {React, useState} from 'react'

const InvoiceForm = () => {
  
return (
    <>
    <h1>Invoice Form</h1>
    <Container>
        <Grid container justifyContent="space-between" direction="column">
        <Grid container spacing={10}>
            <Grid item xs={12} lg={6} md={4}>
                <Card className="p-4 mb-4">
                    <div className="font-size-lg font-weight-bold">Client Data</div>
                    <Divider className="my-4" />
                    <CardContent>
                    <TextField
                        fullWidth
                        className="m-2"
                        label="Vendor Name"
                        placeholder="Vendor Name" 
                        size="small"
                        multiline
                        margin="dense"
                        rowsMax="3"
                        variant="outlined"
                        //value={}
                        //onChange={}
                    />
                    <TextField
                        fullWidth
                        className="m-2"
                        label="Vendor Address"
                        placeholder="Vendor Address"
                        multiline
                        size="small"
                        margin="dense"
                        variant="outlined"
                        //value={}
                        //onChange={}
                    />
                    <TextField
                        fullWidth
                        className="m-2"
                        label="FOB"
                        placeholder="FOB"
                        size="small"
                        margin="dense"
                        variant="outlined"
                        //value={}
                        //onChange={}
                    />
                    <TextField
                        fullWidth
                        className="m-2"
                        label="Ship"
                        placeholder="Ship"
                        size="small"
                        margin="dense"
                        variant="outlined"
                        //value={}
                        //onChange={}
                    />
                    <TextField
                        fullWidth
                        className="m-2"
                        label="via"
                        placeholder="via"
                        size="small"
                        margin="dense"
                        variant="outlined"
                        //value={}
                        //onChange={}
                    />
                    <TextField
                        fullWidth
                        className="m-2"
                        label="Ref"
                        placeholder="Ref"
                        size="small"
                        margin="dense"
                        variant="outlined"
                        //value={}
                        //onChange={}
                    />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid container direction="row" spacing={10}>
            <Grid item xs={12} lg={6} md={4}>
                <Card className="p-4 mb-4">
                    <div className="font-size-lg font-weight-bold">Invoice Data</div>
                    <Divider className="my-4" />
                    <CardContent>
                    <TextField
                        fullWidth
                        className="m-2"
                        label="Vendor Address"
                        placeholder="Vendor Address"
                        multiline
                        size="small"
                        margin="dense"
                        variant="outlined"
                    />
                    
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid container direction="row" spacing={10}>
            <Grid item xs={12} lg={6} md={4}>
                <Card className="p-4 mb-4">
                    <div className="font-size-lg font-weight-bold">Item Data</div>
                    <Divider className="my-4" />
                    <CardContent>
                    <TextField
                        fullWidth
                        className="m-2"
                        label="Vendor Address"
                        placeholder="Vendor Address"
                        multiline
                        size="small"
                        margin="dense"
                        variant="outlined"
                    />
                    
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </Grid>

       
    </Container>
    </>
);
}
export default InvoiceForm