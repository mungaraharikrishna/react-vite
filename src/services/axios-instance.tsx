import axios from "axios";
import UtilsService from './utils.service';
import { toast } from "react-toastify";
import AuthService from "./auth.service";

const axiosInstance = axios.create();

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {

        // Modify the request config here (e.g., add headers, authentication tokens)
        const accessToken = UtilsService.getJWTToken();

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
            if (config.headers) config.headers['tix_authorization'] = `Bearer ${accessToken}`;
            if (config.headers) config.headers['x_user_name'] = UtilsService.getUsername();
            if (config.headers) config.headers['organization_id'] = UtilsService.getOrgId();
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
        if (response.data && response.data.statusCode === 400) {
            toast.error(response.data.message);
        }
        return response;
    }, (error) => {
        // Handle response errors here
        console.log(error)
        const originalRequest = error.config;
        if (error.response && error.response.data) {
            toast.error(error.response.data.message);
        } else {
            toast.error(error.message);
        }
        if (error.response.status === 409 && !originalRequest._retry) {
            originalRequest._retry = true;

            // Call your refresh token function to get a new token
            return AuthService.refreshToken().then(response => {
                console.log(response)
                // If token refresh is successful, update the Authorization header with the new token
                UtilsService.setCookies({'access_token': response.data.newToken})
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;

                // Resend the original request with the new token
                return axios(originalRequest);
            }).catch(error => {
                // Handle token refresh failure, e.g., redirect to login page
                console.log("Token refresh failed:", error);
                return Promise.reject(error);
                // Redirect to login or handle the scenario appropriately
            });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;