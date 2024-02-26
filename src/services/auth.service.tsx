import axiosInstance from "./axios-instance";
const env = import.meta.env;

const checkSubdomain = () => { 
    return axiosInstance.get(`${env.APP_API_URL}/subdomain/validate`);
};

const login = (reqObj: any) => { 
    return axiosInstance.post(`${env.APP_API_URL}/users/login`, reqObj);
};

const AuthService = {
    checkSubdomain,
    login,
}

export default AuthService;