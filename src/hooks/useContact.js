import axios from "axios";
import { toast } from 'react-toastify';

import { base_url_candor, getToken } from "../utils/constants";
// here is the example for integrating api
// export const contactDetails = async (payload) => {
//     const data = await axios.get(`${base_url_candor}contacts/contact-detail/${payload}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,
//             },
//         })
//     return data.data;
// }

export const contactsDownloadInCsv = async () => {

    const data = await axios.post(`${base_url_candor}contacts/download-csv`, {
        "firstName": true,
        "lastName": true,
        "email": true,
        "organization": true,
        "occupation": true,
        "address": true,
        "employer": true,
        "phone": true,
        "searchValue": "string"
    }, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    })
        .then(res => {
            toast.success('Data posted successfully!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
            return res.data
        })
        .catch(err => {
            toast.error(err.message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        })
}
