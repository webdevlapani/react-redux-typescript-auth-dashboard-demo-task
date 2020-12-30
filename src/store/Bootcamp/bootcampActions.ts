import {
  GET_BOOTCAMP_REQUEST,
  GET_BOOTCAMP_REQUEST_FAILURE,
  GET_BOOTCAMP_REQUEST_SUCCESS,
} from './bootcampTypes';
import { IAction } from '../IAction';
import { IBootcamp } from './IBootcamp';

/**
 * call on get bootcamp request
 */
export const getBootcampRequest = (): IAction => {
  return {
    type: GET_BOOTCAMP_REQUEST,
  };
};

/**
 * call on get bootcamp success
 */
export const getBootcampSuccess = (bootCamps: IBootcamp[]): IAction => {
  return {
    type: GET_BOOTCAMP_REQUEST_SUCCESS,
    payload: bootCamps,
  };
};

/**
 * call on get bootcamp failure
 */
export const getBootcampFailure = (error: string): IAction => {
  return {
    type: GET_BOOTCAMP_REQUEST_FAILURE,
    payload: error,
  };
};
