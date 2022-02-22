// import axios from "axios";
import axiosApp from '../../../axios';
// import { base_url } from "../../../config";

export const GET_INVOICE_LIST = "GET_INVOICE_LIST";
export const GET_INVOICE_DETAIL = "GET_INVOICE_DETAIL";
export const CREATE_INVOICE = "CREATE_INVOICE";
export const UPDATE_INVOICE = "UPDATE_INVOICE";
export const DETAIL_INVOICE = "DETAIL_INVOICE";

// const accessToken = localStorage.getItem('accessToken', accessToken);
// console.log(localStorage.getItem("accessToken"));
// const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
//     // headers: { Authorization: `${accessToken}` }
// };

export const getInvoiceList = () => {
    console.log("2. Masuk action getList");
    return(dispatch) => {
            axiosApp({
                method: "GET",
                url:"http://localhost:3002/v1/invoice",
                timeout: 120000
            })
            .then((response) => {
                dispatch({
                    type: 'GET_INVOICE_LIST',
                    payload: {
                        data: response.data.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'GET_INVOICE_LIST',
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const getInvoiceDetail = (id) => {
    console.log("2. Masuk action getList");
    return(dispatch) => {
            axiosApp({
                method: "GET",
                url:"http://localhost:3002/v1/invoice/" + id,
                timeout: 120000
            })
            .then((response) => {
                dispatch({
                    type: 'GET_INVOICE_DETAIL',
                    payload: {
                        data: response.data.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'GET_INVOICE_DETAIL',
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const createInvoice = (data) => {
    console.log("2. Masuk action create");
    return(dispatch) => {
        axiosApp({
                method: "POST",
                url:"http://localhost:3002/v1/invoice",
                timeout: 120000,
                data: data
            })
            .then((response) => {
                dispatch({
                    type: 'CREATE_INVOICE',
                    payload: {
                        data: response.data.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE_INVOICE',
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const updateInvoice = (data) => {
    console.log("2. Masuk action create");
    return(dispatch) => {
        axiosApp({
                method: "PUT",
                url:"http://localhost:3002/v1/invoice",
                timeout: 120000,
                data: data
            })
            .then((response) => {
                dispatch({
                    type: 'UPDATE_INVOICE',
                    payload: {
                        data: response.data.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'UPDATE_INVOICE',
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const detailInvoice = (data) => {
    return (dispatch) => {
      dispatch({
        type: DETAIL_INVOICE,
        payload: {
          data: data,
        },
      });
    };
  };
