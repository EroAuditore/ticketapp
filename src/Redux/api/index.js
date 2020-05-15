import axios from "axios";

import { apiUrl } from "../../config.json";

export const apiCall = async (url, data, headers, method) =>
  await axios({
    method,
    url: apiUrl + url,
    data,
    headers,
  });
