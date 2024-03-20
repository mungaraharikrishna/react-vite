import axios from "axios";
import UtilsService from './utils.service';
import { toast } from "react-toastify";

const axiosInstance = axios.create();

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {

        // Modify the request config here (e.g., add headers, authentication tokens)
        const accessToken = UtilsService.getJWTToken();

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
            if (config.headers) config.headers['x_user_name'] = UtilsService.getUsername();
        }
        return config;
    }, (error) => {
        // Handle request errors here
        console.log(error)
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here (e.g., parse, transform)
        console.log(response)
        return response;
    }, (error) => {
        // Handle response errors here
        console.log(error)
        if (error.response && error.response.data) {
            toast.error(error.response.data.message);
        } else {
            toast.error(error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;