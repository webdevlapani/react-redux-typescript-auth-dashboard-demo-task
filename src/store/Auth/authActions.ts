import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './authTypes';
import { IAction } from '../IAction';

/**
 * call on login action
 */
export const loginRequest = (): IAction => {
  return {
    type: LOGIN_REQUEST,
  };
};

/**
 * call on login success
 */
export const loginSuccess = (): IAction => {
  return {
    type: LOGIN_SUCCESS,
  };
};

/**
 * call on login failure
 */
export const loginFailure = (error: string): IAction => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
