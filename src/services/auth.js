import { apiClient } from "./config";



export const apiSignup = async(payload) => {
    return await apiClient.post('/users/register', payload);
};

export const apiSignin = async(payload) => {
    return await apiClient.post('/users/login', payload);
};

export const apiProfile = async() => {
    return await apiClient.get('/user/me');
};