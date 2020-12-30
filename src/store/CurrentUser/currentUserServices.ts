import { AxiosResponse } from 'axios';
import {
  getCurrentUserFailure,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './currentUserActions';
import authAxios from '../../common/middleWare';

/**
 * service for current user.
 */
export const getCurrentUser = () => {
  return (dispatch) => {
    dispatch(getCurrentUserRequest());
    authAxios
      .get('auth/me')
      .then((response: AxiosResponse) => {
        dispatch(getCurrentUserSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getCurrentUserFailure(error.response.data.error));
      });
  };
};
