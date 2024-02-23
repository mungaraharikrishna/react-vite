import axios from "axios";
import utilsService from './utils.service';

const axiosInstance = axios.create();

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {

        // Modify the request config here (e.g., add headers, authentication tokens)
        const accessToken = utilsService.getJWTToken();

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
            if (config.headers) config.headers['x_subdomain'] = utilsService.getSubdomain();
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
        return Promise.reject(error);
    }
);

export default axiosInstance;