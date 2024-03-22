import axiosInstance from "./axios-instance";
import UtilsService from "./utils.service";
const env = import.meta.env;

const checkSubdomain = () => {
    return axiosInstance.get(`${env.APP_API_URL}/subdomain/validate`);
};

const verifyUser = (reqObj: any) => {
    return axiosInstance.post(`${env.APP_API_URL}/userCheck`, reqObj);
};

const login = (reqObj: any) => {
    return axiosInstance.post(`${env.APP_API_URL}/login`, reqObj);
};

const refreshToken = () => {
    const token = UtilsService.getJWTToken();
    return axiosInstance.get(`${env.APP_API_URL}/refreshToken`, { params: { token: token } });
}

const AuthService = {
    checkSubdomain,
    verifyUser,
    login,
    refreshToken
}

export default AuthService;