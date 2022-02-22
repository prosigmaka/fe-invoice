import {
    GET_INVOICE_LIST,
    GET_INVOICE_DETAIL,
} from "../actions/invoiceAction";

let initialState = {
    getInvoiceList: [],
    errorInvoiceList: false,
    getInvoiceDetail: false,
    errorInvoiceDetail: false,
}

const InvoiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INVOICE_LIST: 
            console.log("4. Masuk reducer: ", action);
            return {
                ...state,
                getInvoiceList: action.payload.data,
                errorInvoiceList: action.payload.errorMessage,
            };
        case GET_INVOICE_DETAIL:
            console.log("4. Masuk reducer: ", action);
            return {
                ...state,
                getInvoiceDetail: action.payload.data,
                errorInvoiceDetail: action.payload.errorMessage,
            }
        default:
            return state;
    }
};

export default InvoiceReducer;