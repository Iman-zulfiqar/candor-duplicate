import axios from "axios";

import {base_url_candor, getToken} from "../utils/constants";
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
export const addContact = async (payload) => {
    const data = await axios.post(`http://192.168.1.189:8000/candor/contacts/create`,payload,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        })
    return data.data;
}

