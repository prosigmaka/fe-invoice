import React, { useEffect } from "react"
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    Button,
    Icon,
    IconButton,
    Alert,
    Snackbar,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from '@mui/material'
import {DropzoneDialog} from 'material-ui-dropzone'
import SimpleTable from './SimpleTable'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import { getInvoiceDetail } from "app/redux/actions/invoiceAction";


const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const Status = styled('h3')(({ textcolor }) => ({
    margin: 0,
    boxSizing: 'border-box',
    border: '1px solid',
    borderRadius: '1.75em',
    fontWeight: '400',
    fontSize:'0.9rem',
    width:'75px',
    padding: '5%',
    textAlign: 'center',
    color: textcolor,
}))

const UploadAreaFile = styled('div')(() => ({
    padding: '10px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    '& .btn': { 
        padding:'8px',
        width:'9rem',
        borderRadius:'50px',
        marginRight: '200px',
     },
}))
const UploadArea = styled('div')(() => ({
    padding: '10px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& .btn-v2': { 
        display: 'block',
        width:'4rem',
        fontSize:'11px',
        fontWeight:'600',
        height:'4rem',
        marginLeft: '20px',
        // borderStyle:'solid',
        // borderWidth:'1px',
        // borderRadius:'4px',
     },
}))

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

const Container = styled('div') (() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const TableArea = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .btn': { 
        padding:'8px',
        width:'9rem',
        borderRadius:'50px',
     },
}))

const SmallText = styled('h5')(()=> ({
    marginTop:'1px',
    fontSize:'11px',
    fontWeight:'300',
}))


const DetailTable2 = () => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgWarning = palette.warning.main
    const bgSuccess = palette.success.main

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false)
    const [upload, setUpload] = React.useState(false)

    const invoiceData = useSelector((state) => state.InvoiceReducer.getInvoiceDetail);
    const errorData = useSelector((state) => state.InvoiceReducer.errorInvoiceDetail);

    
    function handleClick() {
        setOpen(true)
    }
    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    function handleUpload(){
        setUpload(true)
    }
    function uploadClose(){
        setUpload(false)
    }

    // const invStatus = invoiceData.invoice_status;
    // console.log(invStatus);

    return(
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
          <CardHeader>
            {/* <Title>PSM/09012022/XTI/22</Title> */}
            <Title>{invoiceData.invoice_num}</Title>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Payment Status</InputLabel>
                <Select size="small" defaultValue={invoiceData.invoice_status} label="Payment Status">
                    <MenuItem value="unpaid" onClick={handleClick}>
                            <Status textcolor={bgError}>Unpaid</Status>
                    </MenuItem>
                    <MenuItem value="paid" onClick={handleClick}> 
                            <Status textcolor={bgPrimary}>Paid</Status>
                    </MenuItem>
                    <MenuItem value="late"> 
                            <Status textcolor={bgError}>late</Status>
                    </MenuItem>
                    <MenuItem value="partial"onClick={handleClick}> 
                            <Status textcolor={bgWarning}>Partial</Status>
                    </MenuItem>
                    <MenuItem value="approve"onClick={handleClick}> 
                            <Status textcolor={bgSuccess}>Approve</Status>
                    </MenuItem>
                </Select>
              </FormControl>
          </CardHeader>
            <Box overflowX="auto" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                <Container>
                <UploadAreaFile>

                    <Button 
                        color="primary" 
                        variant="contained" 
                        type="submit" 
                        className='btn'
                        onClick={handleUpload}
                    >
                        <Icon classname="icon" sx={{marginRight:'10%'}}>file_upload</Icon>
                        Upload File
                    </Button>
                </UploadAreaFile>

                <UploadArea>                
                    <Link to={"/form"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
                        <IconButton 
                            color="info" 
                            variant="contained" 
                            type="submit" 
                            className='btn-v2'
                        >
                            <Icon classname="icon">edit</Icon>
                            <SmallText>Edit Invoice</SmallText>
                        </IconButton>
                    </Link>

                    <IconButton 
                        color="info" 
                        variant="contained" 
                        type="submit" 
                        className='btn-v2'
                    > 
                        <Icon classname="icon">present_to_all</Icon>
                        <SmallText>Generate Invoice</SmallText>
                    </IconButton>
                    <IconButton 
                        color="info" 
                        variant="contained" 
                        type="submit" 
                        className='btn-v2'
                    > 
                        <Icon classname="icon">present_to_all</Icon>
                        <SmallText>Generate Receipt</SmallText>
                    </IconButton>
                </UploadArea>
                </Container>
                <TableArea>
                `   < SimpleTable/>
                </TableArea>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                    variant="filled"
                >
                    Payment Status Succesfully Changed
                </Alert>
            </Snackbar>
            <DropzoneDialog
                    open={upload}
                    acceptedFiles={['application/pdf', 'image/png', 'image/jpg']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={uploadClose}
            />
            </Box>
        </Card>
    )
}
export default DetailTable2