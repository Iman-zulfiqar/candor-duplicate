import axios from "axios";

import { base_url_candor, getToken } from "../utils/constants";

export const contactDetails = async (payload) => {
  const data = await axios.get(`${base_url_candor}contacts/find-all`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return data.data;
};
export const UseContactDetail = function () {
  const responce = useQuery("contactDetails", contactDetails);
  if (responce.data) {
    return data;
  }
};
