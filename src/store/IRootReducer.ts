/**
 * Register root reducer state here
 */
import { IAuthState } from './Auth/authReducer';
import { IBootcampState } from './Bootcamp/bootcampReducer';
import { ICurrentUserState } from './CurrentUser/currentUserReducer';

export interface IRootReducerState {
  /**
   * Auth Reducer state
   */
  auth: IAuthState;
  /**
   * Current user Reducer state
   */
  currentUser: ICurrentUserState;
  /**
   * Bootcamps Reducer Reducer state
   */
  bootCamps: IBootcampState;
}
