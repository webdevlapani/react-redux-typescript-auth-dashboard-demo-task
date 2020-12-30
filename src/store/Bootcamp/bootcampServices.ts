import { AxiosResponse } from 'axios';
import authAxios from '../../common/middleWare';
import { getBootcampFailure, getBootcampRequest, getBootcampSuccess } from './bootcampActions';

/**
 * service for get bootcamp
 */
export const getBootcamps = () => {
  return (dispatch) => {
    dispatch(getBootcampRequest());
    authAxios
      .get('bootcamps')
      .then((response: AxiosResponse) => {
        dispatch(getBootcampSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getBootcampFailure(error.response.data.error));
      });
  };
};
