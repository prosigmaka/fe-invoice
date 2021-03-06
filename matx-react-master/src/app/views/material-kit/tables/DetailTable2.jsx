import React from 'react'
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

const UploadArea = styled('div')(() => ({
    padding: '10px',
    // paddingRight: '2px',
    marginLeft: '24px',
    marginRight: '24px',
    marginBottom: '12px',
    borderStyle: 'solid',
    borderWidth:'1px',
    borderColor:'#C0C0C0',
    borderRadius:'5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .btn': { 
        padding:'8px',
        width:'9rem',
        borderRadius:'50px',
        marginRight: '200px',
     },
    '& .btn-v2': { 
        display: 'block',
        width:'4rem',
        borderStyle:'solid',
        borderWidth:'1px',
        fontSize:'11px',
        fontWeight:'600',
        borderRadius:'4px',
        height:'4rem',
        marginLeft: '20px',
     },
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
    // const bgSecondary = palette.secondary.main
    const bgWarning = palette.warning.main
    const bgSuccess = palette.success.main

    const [open, setOpen] = React.useState(false)
    const [upload, setUpload] = React.useState(false)

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


    return(
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
          <CardHeader>
            <Title>PSM/09012022/XTI/22</Title>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Payment Status</InputLabel>
                <Select size="small" defaultValue="status_unpaid" label="Payment Status">
                    <MenuItem value="status_unpaid" onClick={handleClick}>
                            <Status textcolor={bgError}>Unpaid</Status>
                    </MenuItem>
                    <MenuItem value="status_paid" onClick={handleClick}> 
                            <Status textcolor={bgPrimary}>Paid</Status>
                    </MenuItem>
                    {/* <MenuItem value="status_late"> 
                            <Status textcolor={bgError}>late</Status>
                    </MenuItem> */}
                    <MenuItem value="status_partial"onClick={handleClick}> 
                            <Status textcolor={bgWarning}>Partial</Status>
                    </MenuItem>
                    <MenuItem value="status_approve"onClick={handleClick}> 
                            <Status textcolor={bgSuccess}>Approve</Status>
                    </MenuItem>
                </Select>
              </FormControl>
          </CardHeader>
            <Box overflowX="auto">
                <UploadArea>

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