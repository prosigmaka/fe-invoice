import {
    GET_INVOICE_LIST,
    GET_INVOICE_DETAIL,
    CREATE_INVOICE,
    UPDATE_INVOICE,
    DETAIL_INVOICE

} from '../actions/invoiceAction'

let initialState = {
    getInvoiceList: [],
    errorInvoiceList: false,

    getInvoiceDetail: false,
    errorInvoiceDetail: false,

    createInvoice: false,
    errorCreateInvoice: false,

    updateInvoice: false,
    errorUpdateInvoice: false,

    detailProjectResult: false,
}

const InvoiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INVOICE_LIST:
            console.log('4. Masuk reducer: ', action)
            return {
                ...state,
                getInvoiceList: action.payload.data,
                errorInvoiceList: action.payload.errorMessage,
            }
        case GET_INVOICE_DETAIL:
            console.log('4. Masuk reducer: ', action)
            return {
                ...state,
                getInvoiceDetail: action.payload.data,
                errorInvoiceDetail: action.payload.errorMessage,
            }
        case CREATE_INVOICE:
            console.log('4. Masuk reducer: ', action)
            return {
                ...state,
                createInvoice: action.payload.data,
                errorCreateInvoice: action.payload.errorMessage,
            }
        case UPDATE_INVOICE:
            console.log('4. Masuk reducer: ', action)
            return {
                ...state,
                updateInvoice: action.payload.data,
                errorUpdateInvoice: action.payload.errorMessage,
            }
        case DETAIL_INVOICE:
            console.log('4. Masuk reducer: ', action)
            return {
                ...state,
                detailInvoiceResult: action.payload.data,
            }
        default:
            return state
    }
}

export default InvoiceReducer
