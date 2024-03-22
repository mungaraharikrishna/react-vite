const env = import.meta.env;
import axiosInstance from "./axios-instance";

const getUsers = () => {
    return axiosInstance.get(`${env.APP_API_URL}/user/listUserBasedOnOrganization`);
}

const UsersService = {
    getUsers
};

export default UsersService;