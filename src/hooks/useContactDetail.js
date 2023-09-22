import axios from "axios";
import { useQuery } from "react-query";

import { base_url_candor, getToken } from "../utils/constants";

/**
 * Retrieves contact details by making a GET request to the API.
 * @returns - A promise that resolves to the response data.
 */
export const contactDetails = async () => {
  try {
    // Construct the API endpoint URL
    const apiUrl = `${base_url_candor}contacts/find-all`;

    // Make a GET request with the Authorization token
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    // Return data from the table
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Custom hook for fetching contact details using useQuery.
 * @returns - The query result object.
 */
export const useContactDetail = function () {
  return useQuery("contactDetails", contactDetails);
};
