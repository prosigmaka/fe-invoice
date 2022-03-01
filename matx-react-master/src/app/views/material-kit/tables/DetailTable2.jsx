import React, { useEffect, useState } from 'react'
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    Button,
    Icon,
    IconButton,
    Alert,
    Snackbar,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
} from '@mui/material'
import { DropzoneDialog } from 'material-ui-dropzone'
import SimpleTable from './SimpleTable'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    getInvoiceDetail,
    deleteInvoiceDetail,
} from 'app/redux/actions/invoiceAction'

const CardArea = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .labelStatus': {
        fontSize: '12px',
        marginTop: '-7px',
    },
}))
const CardHeader = styled('div')(() => ({
    // paddingLeft: '24px',
    // paddingRight: '24px',
    // marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
}))

const Title = styled('span')(() => ({
    fontSize: '20px',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const Status = styled('h3')(({ textcolor }) => ({
    margin: 0,
    boxSizing: 'border-box',
    border: '1px solid',
    borderRadius: '1.75em',
    fontWeight: '400',
    fontSize: '0.9rem',
    width: '75px',
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
        padding: '8px',
        width: '9rem',
        borderRadius: '50px',
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
        width: '4rem',
        fontSize: '11px',
        fontWeight: '600',
        height: '4rem',
        marginLeft: '20px',
    },
}))

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
}

const UploadBox = styled('div')(() => ({
    marginLeft: '18px',
    boxSizing: 'border-box',
    border: '1px solid',
    borderRadius: '5px',
    fontWeight: '400',
    fontSize: '0.9rem',
    width: '320px',
    padding: '5%',
    textAlign: 'center',
}))

const Container = styled('div')(() => ({
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
        padding: '8px',
        width: '9rem',
        borderRadius: '50px',
    },
}))

const SmallText = styled('h5')(() => ({
    marginTop: '1px',
    fontSize: '11px',
    fontWeight: '300',
}))

const DetailTable2 = () => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgWarning = palette.warning.main
    const bgSuccess = palette.success.main

    const dispatch = useDispatch()

    const url_path = window.location.pathname.split('/')
    const detailId = url_path[url_path.length - 1]

    useEffect(() => {
        dispatch(getInvoiceDetail(detailId))
    }, [dispatch, selectedStatus])

    const invoiceData = useSelector(
        (state) => state.InvoiceReducer.getInvoiceDetail
    )
    const [selectedStatus, setSelectedStatus] = useState(
        invoiceData.invoice_status
    )

    const [open, setOpen] = useState(false)
    const [upload, setUpload] = useState(false)

    function handleClick(event) {
        setSelectedStatus(event.target.value)
        setOpen(true)
    }
    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    function handleUpload() {
        setUpload(true)
    }
    function uploadClose() {
        setUpload(false)
    }

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardArea>
                <CardHeader>
                    <Title sx={{ marginRight: '20px' }}>
                        {invoiceData.invoice_num}
                    </Title>
                    {/* <Title sx={{ marginRight: '20px' }}>
                        {invoiceData.invoice_status}
                    </Title> */}
                </CardHeader>
                <FormControl sx={{ width: '180px' }}>
                    <InputLabel
                        id="demo-simple-select-label"
                        className="labelStatus"
                    >
                        Change Payment Status
                    </InputLabel>
                    <Select
                        name="status"
                        size="small"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // default={selectedStatus}
                        label="Change Payment Status"
                        onChange={handleClick}
                    >
                        <MenuItem value="unpaid" onClick={handleClick}>
                            <Status textcolor={bgError}>Unpaid</Status>
                        </MenuItem>
                        <MenuItem value="paid" onClick={handleClick}>
                            <Status textcolor={bgPrimary}>Paid</Status>
                        </MenuItem>
                        <MenuItem value="partial" onClick={handleClick}>
                            <Status textcolor={bgWarning}>Partial</Status>
                        </MenuItem>
                        <MenuItem value="approve" onClick={handleClick}>
                            <Status textcolor={bgSuccess}>Approve</Status>
                        </MenuItem>
                    </Select>
                </FormControl>
            </CardArea>
            <CardArea>
                <FormControl>
                    {/* {selectedStatus} */}
                    {invoiceData.invoice_status === 'paid' ? (
                        <Status textcolor={bgPrimary}>Paid</Status>
                    ) : invoiceData.invoice_status === 'unpaid' ? (
                        <Status textcolor={bgError}>Unpaid</Status>
                    ) : invoiceData.invoice_status === 'late' ? (
                        <Status textcolor={bgError}>Late</Status>
                    ) : invoiceData.invoice_status === 'partial' ? (
                        <Status textcolor={bgWarning}>Partial</Status>
                    ) : invoiceData.invoice_status === 'approve' ? (
                        <Status textcolor={bgSuccess}>Approve</Status>
                    ) : (
                        <Status bgcolor={bgPrimary}>
                            {invoiceData.invoice_status}
                        </Status>
                    )}
                    {/* {selectedStatus === 'paid' ? (
                        <Status textcolor={bgPrimary}>Paid</Status>
                    ) : selectedStatus  === 'unpaid' ? (
                        <Status textcolor={bgError}>Unpaid</Status>
                    ) : selectedStatus  === 'late' ? (
                        <Status textcolor={bgError}>Late</Status>
                    ) : selectedStatus  === 'partial' ? (
                        <Status textcolor={bgWarning}>Partial</Status>
                    ) : selectedStatus  === 'approve' ? (
                        <Status textcolor={bgSuccess}>Approve</Status>
                    ) : (
                        <Status bgcolor={bgPrimary}>
                            {selectedStatus}
                        </Status>
                    )} */}
                </FormControl>
            </CardArea>
            <Box
                overflowX="auto"
                style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '10px',
                }}
            >
                <Container>
                    <UploadAreaFile>
                        <Button
                            color="primary"
                            variant="contained"
                            component="label"
                            type="button"
                            className="btn"
                            onClick={handleUpload}
                        >
                            <Icon classname="icon" sx={{ marginRight: '10%' }}>
                                file_upload
                            </Icon>
                            Upload File
                            <input type="file" hidden />
                        </Button>
                    </UploadAreaFile>

                    <UploadArea>
                        <Link
                            to={'/form'}
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'block',
                            }}
                        >
                            <IconButton
                                color="info"
                                variant="contained"
                                type="submit"
                                className="btn-v2"
                            >
                                <Icon classname="icon">edit</Icon>
                                <SmallText>Edit Invoice</SmallText>
                            </IconButton>
                        </Link>

                        <IconButton
                            color="info"
                            variant="contained"
                            type="submit"
                            className="btn-v2"
                        >
                            <Icon classname="icon">present_to_all</Icon>
                            <SmallText>Generate Invoice</SmallText>
                        </IconButton>
                        <IconButton
                            color="info"
                            variant="contained"
                            type="submit"
                            className="btn-v2"
                        >
                            <Icon classname="icon">present_to_all</Icon>
                            <SmallText>Generate Receipt</SmallText>
                        </IconButton>
                    </UploadArea>
                </Container>

                <TableArea>
                    <SimpleTable />
                </TableArea>

                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: '100%' }}
                        variant="filled"
                    >
                        Payment Status Succesfully Changed
                    </Alert>
                </Snackbar>
                {/* <DropzoneDialog
                    open={upload}
                    acceptedFiles={[
                        'application/pdf',
                        'image/png',
                        'image/jpg',
                    ]}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={uploadClose}
                /> */}
            </Box>
        </Card>
    )
}
export default DetailTable2
