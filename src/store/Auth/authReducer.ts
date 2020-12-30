import { IAction } from '../IAction';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './authTypes';

export interface IAuthState {
  loading: boolean;
  isAuthenticate: boolean;
  error: string;
}

const initialState: IAuthState = {
  loading: false,
  isAuthenticate: false,
  error: '',
};

/**
 * Auth reducer
 * @param state
 * @param action
 */
const authReducer = (state = initialState, action: IAction): IAuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticate: true,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticate: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
