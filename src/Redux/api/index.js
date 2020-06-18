import axios from "axios";

import { apiUrl } from "../../config.json";

const apiCall = async (url, data, headers, method) =>
  await axios({
    method,
    url: apiUrl + url,
    data,
    headers,
  });

export default apiCall;
