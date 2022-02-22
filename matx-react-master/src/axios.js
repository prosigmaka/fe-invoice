import axios from 'axios'
import Swal from 'sweetalert2'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)



const axiosApp = axios.create()
axiosApp.interceptors.request.use(
    (request) => {
        // const accessTokenResponse = JSON.parse(localStorage.getItem('accessToken'))
        const accessTokenResponse = localStorage.getItem('accessToken')
        // console.log(accessTokenResponse)
        if (accessTokenResponse === "null"  || !accessTokenResponse) {
            return request
        } else {
            // const accessToken = accessTokenResponse["access_token"]
            request.headers = {
                'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            return request
        }
    },
    (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Koneksi Jaringan Terputus'
        })
        return Promise.reject(error)
    }
);

export default (axiosInstance, axiosApp)

// axios.interceptors.response.use(
//     response => {
//         if (!(response.data.status >= 200 && response.data.status < 300)) {
//             Swal.fire({
//                 icon: 'error',
//                 title: response.data.message
//             })
//         } else if (response.data.status === 401  response.data.status === 404) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Waktu login habis'
//             })
//             storage.local.clear()
//             window.location.href = "#/login"
//         }
//         return response
//     },
//     error => {
//         storage.local.clear()
//         Swal.fire({
//             icon: 'error',
//             title: 'Silahkan login kembali'
//         })
//         window.location.href = "#/login"
//         return Promise.reject(error)
//     }
// );