import {
    Grid,
    Typography,
    Box
} from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const POForm = () => {
    const [state, setState] = useState({
        po_date: new Date(),
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

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        po_date, po_number, ordered_by, accepted_by, recipent_position, po_fob, po_ship, po_via, po_ref,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <Typography>PO Number</Typography><Box py="5px" />
                        <TextField
                            label="PO No."
                            size="small"
                            type="text"
                            name="PO No."
                            onChange={handleChange}
                            value={po_number}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Typography>PO Date</Typography>
                        <Box py="5px" />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                size="small"
                                value={po_date}
                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="PO Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <Typography>Ordered by</Typography><Box py="5px" />
                        <TextField
                            size="small"
                            label="Ordered by"
                            type="text"
                            name="Ordered by"
                            onChange={handleChange}
                            value={ordered_by}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        /> 
                         <Typography>Accepted by</Typography><Box py="5px" />
                        <TextField
                            size="small"
                            label="Ordered by"
                            type="text"
                            name="Ordered by"
                            onChange={handleChange}
                            value={accepted_by}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />                     
                        <Typography>Recipent Position</Typography><Box py="5px" />
                        <TextField
                            size="small"
                            label="Recipent Position"
                            type="text"
                            name="Position"
                            onChange={handleChange}
                            value={recipent_position}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <Typography>FOB</Typography><Box py="5px" />
                        <TextField
                            size="small"
                            label="FOB"
                            type="text"
                            name="FOB"
                            onChange={handleChange}
                            value={po_fob}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Typography>Ship</Typography><Box py="5px" />
                        <TextField
                            size="small"
                            label="Ship"
                            type="text"
                            name="Ship"
                            onChange={handleChange}
                            value={po_ship}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Typography>Via</Typography><Box py="5px" />
                        <TextField
                            size="small"
                            label="Via"
                            type="text"
                            name="Via"
                            onChange={handleChange}
                            value={po_via}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Typography>Ref</Typography><Box py="5px" />
                        <TextField
                            size="small"
                            label="Ref"
                            type="text"
                            name="Ref"
                            onChange={handleChange}
                            value={po_ref}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                </Grid>
                {/* <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Submit
                    </Span>
                </Button> */}
            </ValidatorForm>
        </div>
    )
}

export default POForm
