import axiosInstance from "./axios-instance";
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

const AuthService = {
    checkSubdomain,
    verifyUser,
    login,
}

export default AuthService;