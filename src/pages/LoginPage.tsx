import { useEffect } from 'react';
import axiosInstance from '../axios/AxiosInstance';
import { ApiConstants } from '../enums/ApiConstants';
import { LocalStorageKeys } from '../enums/ApplicationEnums';

const LoginPage = () => {
    useEffect(() => {
        localStorage.setItem(LocalStorageKeys.TOKEN, 'token');
        axiosInstance.get(ApiConstants.API_URL);
    }, []);
    return <div>{process.env.REACT_APP_API_URL}</div>;
};

export default LoginPage;
