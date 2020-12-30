import axios, { AxiosResponse } from 'axios';
import { loginFailure, loginRequest, loginSuccess } from './authActions';

const baseUrl = process.env.REACT_APP_BASEURL;

interface ILoginService {
  email: string;
  password: string;
}

/**
 * service for Login
 * @param email
 * @param password
 * @param callBack
 */
export const login = ({ email, password }: ILoginService, callBack: () => void) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post(baseUrl + 'auth/login', { email, password })
      .then((response: AxiosResponse) => {
        localStorage.setItem('accessToken', response.data.token);
        dispatch(loginSuccess());
        callBack();
      })
      .catch((error) => {
        if (error.response) {
          dispatch(loginFailure(error.response.data.error));
        }
      });
  };
};
