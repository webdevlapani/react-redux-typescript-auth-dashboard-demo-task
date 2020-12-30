import {
  GET_CURRENT_USER_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
} from './currentUserTypes';
import { IAction } from '../IAction';
import { ICurrentUser } from './ICurrentUser';

/**
 * call on current user request.
 */
export const getCurrentUserRequest = (): IAction => {
  return {
    type: GET_CURRENT_USER_REQUEST,
  };
};

/**
 * call on current user success.
 */
export const getCurrentUserSuccess = (currentUser: ICurrentUser): IAction => {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    payload: currentUser,
  };
};

/**
 * call on current user failure.
 */
export const getCurrentUserFailure = (error: string): IAction => {
  return {
    type: GET_CURRENT_USER_FAILURE,
    payload: error,
  };
};
