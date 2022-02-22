import axios from 'axios'
// import { base_url } from "../../../config";
// import { API_URL } from '../../../config'
import axiosApp from '../../../axios'

export const GET_INVOICE_LIST = 'GET_INVOICE_LIST'
export const GET_INVOICE_DETAIL = 'GET_INVOICE_DETAIL'

// const accessToken = localStorage.getItem('accessToken', accessToken);
// console.log(localStorage.getItem("accessToken"));
// const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
//     // headers: { Authorization: `${accessToken}` }
// };

export const getInvoiceList = () => {
    console.log('2. Masuk action getList')
    // console.log({API_URL});
    return (dispatch) => {
        axiosApp({
            method: 'GET',
            // url: `${API_URL}/v1/invoice`,
            url:"http://localhost:3002/v1/invoice",
            // url: "http://localhost:3000/data",
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            //     Accept: `application/json`,
            //     "Content-Type": `application/json`,
            // },
            timeout: 120000,
        })
            .then((response) => {
                // console.log("3. Berhasil dapat data", response);
                dispatch({
                    type: 'GET_INVOICE_LIST',
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                })
            })
            .catch((error) => {
                // console.log(localStorage.getItem("accessToken"));
                dispatch({
                    type: 'GET_INVOICE_LIST',
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                })
            })
    }
}

// export const getInvoiceList = () => {
//     return(dispatch) => {
//             axios
//             .get("http://localhost:3002/v1/invoice",
//             // .get("http://localhost:3000/data",
//             // {headers:{Authorization: `Bearer ${accessToken}`}})
//                 { headers: {
//                     Authorization: `Bearer ${localStorage.getItem("accessToken")}`
//                 }}
//             )
//             .then(function (response){
//                 console.log("3. Berhasil dapat data", response);
//                 dispatch({
//                     type: 'GET_INVOICE_LIST',
//                     payload: {
//                         data: response.data,
//                         errorMessage: false,
//                     },
//                 });
//             })
//             .catch(function(error){
//                 console.log(localStorage.getItem("accessToken"));
//                 dispatch({
//                     type: 'GET_INVOICE_LIST',
//                     payload: {
//                         data: false,
//                         errorMessage: error.message,
//                     },
//                 });
//             });
//     };
// };

// export const getInvoiceDetail = (id) => {
//     return(dispatch) => {
//         axios
//             // .get("http://localhost:3002/v1/invoice" + id,
//             .get("http://localhost:3000/data/" + id,
//             // {headers:{Authorization: `Bearer ${accessToken}`}})
//             )
//             .then(function(response){
//                 dispatch({
//                     type: 'GET_INVOICE_DETAIL',
//                     payload: {
//                         data: response.data,
//                         errorMessage: false
//                     },
//                 });
//             })
//             .catch(function(error) {
//                 dispatch({
//                     type: 'GET_INVOICE_DETAIL',
//                     payload: {
//                         data: false,
//                         errorMessage: error.message,
//                     },
//                 });
//             });
//     };
// };

export const getInvoiceDetail = (id) => {
    console.log('2. Masuk action getList')
    return (dispatch) => {
        axios({
            method: 'GET',
            url: 'http://localhost:3002/v1/invoice/' + id,
            // url: "http://localhost:3000/data/" + id,
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            //     Accept: `application/json`,
            //     "Content-Type": `application/json`,
            // },
            timeout: 120000,
        })
            .then((response) => {
                // console.log("3. Berhasil dapat data", response);
                dispatch({
                    type: 'GET_INVOICE_DETAIL',
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                })
            })
            .catch((error) => {
                // console.log(localStorage.getItem("accessToken"));
                dispatch({
                    type: 'GET_INVOICE_DETAIL',
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                })
            })
    }
}
