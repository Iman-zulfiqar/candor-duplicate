import axios from "axios";

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
            console.log(res.data);
            return res.data;
        })
        .catch(err => {
            console.error(err)
            return err;
        })
}
