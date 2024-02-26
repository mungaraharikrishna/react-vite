import axios from "axios";
const env = import.meta.env;

const checkSubdomain = () => { 
    return axios.get(`${env.APP_API_URL}/subdomain/validate`);
};

const login = (reqObj: any) => { 
    return axios.post('', reqObj);
};

const AuthService = {
    checkSubdomain,
    login,
}

export default AuthService;