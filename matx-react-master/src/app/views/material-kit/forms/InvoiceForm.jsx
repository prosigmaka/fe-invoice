import {
    Grid,
    Typography,
    Box,
    Button,
    Table,
    TableHead,
    TableRow,
    TableContainer,
    TableCell,
    TableBody,
    InputBase,
    IconButton,
} from '@mui/material'
import { styled } from '@mui/system'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import {initialState} from './initialState'
import styles from './Invoice.module.css'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const InvoiceForm = () => {
    
    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    // const handleChange = (event) => {
    //     event.persist()
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.value,
    //     })
    // }

    //item detail
    const [invoiceData, setInvoiceData] = useState(initialState)
    const [vat, setVat] = useState(0)
    const [pph, setPPH] = useState(0)
    const [total, setTotal] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [invdate, setInvDate] = useState(0)
    const [duedate, setDueDate] = useState(0)
    const handleDueDateChange = (duedate) => {
        setDueDate(duedate);
      };
    const handleInvDateChange = (invdate) => {
        setInvDate(invdate);
      };
    const handleChange =(index, e) => {
        const values = [...invoiceData.items]
        values[index][e.target.name] = e.target.value
        setInvoiceData({...invoiceData, items: values})
        
    }
    const handleRemoveField =(index) => {
        const values = invoiceData.items
        values.splice(index, 1)
        setInvoiceData((prevState) => ({...prevState, values}))
        // console.log(values)
    }
    const handleAddField = (e) => {
        e.preventDefault()
        setInvoiceData((prevState) => ({...prevState, items: [...prevState.items,  {itemName: '', unitPrice: '', quantity: '', time:'', amount: '' }]}))
    }
    //summary
    
    useEffect(() => {
        //Get the subtotal
        const subTotal =()=> {
        var arr = document.getElementsByName("amount");
        var subtotal = 0;
        for(var i = 0; i < arr.length; i++) {
            if(arr[i].value) {
                subtotal += +arr[i].value;
            }
            // document.getElementById("subtotal").value = subtotal;
            setSubTotal(subtotal)
        }
    }

    subTotal()
   
}, [invoiceData])
    useEffect(() => {
        const total =() => {
            
            //Tax rate is calculated as (input / 100 ) * subtotal + subtotal 
            const overallSum = 10 /100 * subTotal + 2/100 * subTotal + subTotal
            //VAT is calculated as tax rates /100 * subtotal
            setVat(10 /100 * subTotal)
            setPPH(2/100 * subTotal)
            setTotal(overallSum)


        }
        total()
    }, [invoiceData, subTotal])
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <Typography>Invoice#</Typography><Box py="5px" />
                        <TextField
                            type="text"
                            name="Invoice No."
                            id="standard-basic"
                            size="small"
                            //onChange={handleChange}
                            //value={username || ''}
                            validators={[
                                'required',
                            ]}
                            label="Invoce No."
                            errorMessages={['this field is required']}
                            defaultValue={invoiceData.invoiceNumber}
                        />
                        <Typography>Due Date</Typography>
                        <Box py="5px" />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={duedate}
                                onChange={handleDueDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Due Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }} direction="row">
                    <Typography>Invoice Date</Typography>
                        <Box py="5px" />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={invdate}
                                onChange={handleInvDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Invoice Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TableContainer>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell style={{width: '30%' }}>Item</TableCell>
                            <TableCell >Qty</TableCell>
                            <TableCell>Unit</TableCell>
                            <TableCell>Unit Price</TableCell>
                            <TableCell>Time (Month)</TableCell>
                            <TableCell >Amount</TableCell>
                            <TableCell width={50}>Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoiceData.items.map((itemField, index) => (
                            <TableRow key={index}>
                            <TableCell  scope="row" style={{width: '40%' }}> <InputBase style={{width: '100%'}} outline="none" sx={{ ml: 1, flex: 1 }} type="text" name="itemName" onChange={e => handleChange(index, e)} value={itemField.itemName} placeholder="Item name or description" multiline/> </TableCell>
                            <TableCell align="right"> <InputBase sx={{ ml: 1, flex: 1 }} type="number" name="quantity" onChange={e => handleChange(index, e)} value={itemField.quantity} placeholder="0" /> </TableCell>
                            <TableCell align="right"> <InputBase sx={{ flex: 1 }} type="text" name="unit" placeholder="person" /> </TableCell>
                            <TableCell align="right"> <InputBase sx={{ ml: 1, flex: 1 }} type="number" name="unitPrice"  onChange={e => handleChange(index, e)} value={itemField.unitPrice} placeholder="0" /> </TableCell>
                            <TableCell align="right"> <InputBase sx={{ ml: 1, flex: 1 }} type="number" name="time" onChange={e => handleChange(index, e)} value={itemField.time} placeholder="0" /> </TableCell>
                            <TableCell align="right"> <InputBase sx={{ ml: 1, flex: 1 }} type="number" name="amount" onChange={e => handleChange(index, e)}  value={(itemField.quantity * itemField.unitPrice* itemField.time)} disabled /> </TableCell>
                            <TableCell width={50} align="right"> 
                                <IconButton onClick={() =>handleRemoveField(index)}>
                                    <DeleteOutlinedIcon style={{width: '20px', height: '20px'}}/>
                                </IconButton>
                            </TableCell>
                    
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                        </TableContainer>
                            <div>
                                <Button variant="contained" onClick={handleAddField}>+ Add New Item</Button>
                            </div>
                        
                        <div className={styles.invoiceSummary}>
                            <div className={styles.summary}>Invoice Summary</div>
                            <div className={styles.summaryItem}>
                                <p>Sub total:</p>
                                <h4>{subTotal}</h4>
                            </div>
                            <div className={styles.summaryItem}>
                                <p>PPN(10%):</p>
                                <h4>{vat}</h4>
                            </div>
                            <div className={styles.summaryItem}>
                                <p>PPH (2%):</p>
                                <h4>{pph}</h4>
                            </div>
                            <div className={styles.summaryItem}>
                                <p>Total</p>
                                <h4 style={{color: "black", fontSize: "18px", lineHeight: "8px"}}>Rp. {total}</h4>
                            </div>
                        </div>
                        <Typography>Notes/Terms</Typography><Box py="5px" />
                        <TextField
                            type="text"
                            name="Notes/Terms"
                            id="standard-basic"
                            size="small"
                            multiline
                            rows={4}
                            label="Provide additional details or terms of service"
                            //onChange={handleChange}
                            //value={username || ''}
                        />
                    </Grid>
                    
                </Grid>
            </ValidatorForm>
        </div>
        
    )
}

export default InvoiceForm
