import { IAction } from '../IAction';
import {
  GET_CURRENT_USER_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
} from './currentUserTypes';
import { ICurrentUser } from './ICurrentUser';

export interface ICurrentUserState {
  loading: boolean;
  user: ICurrentUser;
  error: string;
}

const initialState: ICurrentUserState = {
  loading: false,
  user: {
    name: '',
    email: '',
  },
  error: '',
};

/**
 * reducer for current user.
 * @param state
 * @param action
 */
const currentUserReducer = (state = initialState, action: IAction): ICurrentUserState => {
  switch (action.type) {
    case GET_CURRENT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: initialState.user,
        error: '',
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      };
    case GET_CURRENT_USER_FAILURE:
      return {
        loading: false,
        user: initialState.user,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
