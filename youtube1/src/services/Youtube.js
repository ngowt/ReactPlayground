import axios from "axios";

const APIKey = `AIzaSyDu77ncX7jEMgGSJIApcuoY1SCfdSRP8m0`;
export const Youtube = axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    key: APIKey
  }
});
