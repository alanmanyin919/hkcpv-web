import axios from "axios";
const dataOneGovResourceClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DATA_ONE_GOV_RESOURCE_API_BASE_URL,
    timeout: 10000,
})

dataOneGovResourceClient.interceptors.response.use(
    response => response,
    error => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
)

export {
    dataOneGovResourceClient
};