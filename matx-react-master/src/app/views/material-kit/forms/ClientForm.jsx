import {
    Grid,
    Typography,
    Box,
} from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const ClientForm = () => {
    const [state, setState] = useState({
        
    })

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }


    const {
        client_name,
        client_address,      
        client_email,
        contact_person,
        client_position,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <Typography>Client Name</Typography><Box py="5px" />
                        <TextField
                            type="text"
                            name="Client Name"
                            id="standard-basic"
                            size="small"
                            label="Client Name"
                            onChange={handleChange}
                            value={client_name}
                            validators={[
                                'required',  
                            ]}
                            errorMessages={['this field is required']}
                        />
                        <Typography>Client Address</Typography><Box py="5px" />
                        <TextField
                            label="Client Address"
                            size="small"
                            type="text"
                            name="Vendor Address"
                            multiline
                            onChange={handleChange}
                            value={client_address}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Typography>Email</Typography><Box py="5px" />
                        <TextField
                            label="Email"
                            size="small"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={client_email}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <Typography>Contact Person</Typography><Box py="5px" />
                        <TextField
                            label="Contact Person"
                            size="small"
                            type="text"
                            name="contact person"
                            onChange={handleChange}
                            value={contact_person}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                                ]}
                        />
                        <Typography>Client Position</Typography><Box py="5px" />
                        <TextField
                            label="Position"
                            size="small"
                            type="text"
                            name="contact person"
                            onChange={handleChange}
                            value={client_position}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                                ]}
                        />
                                                
                    </Grid>
                </Grid>
                
            </ValidatorForm>
        </div>
    )
}

export default ClientForm
