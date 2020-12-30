/**
 * It is root for store reducer
 */
import { combineReducers } from 'redux';
import { IRootReducerState } from './IRootReducer';
import authReducer from './Auth/authReducer';
import currentUserReducer from './CurrentUser/currentUserReducer';
import bootcampsReducer from './Bootcamp/bootcampReducer';

const rootReducer = combineReducers<IRootReducerState>({
  auth: authReducer,
  currentUser: currentUserReducer,
  bootCamps: bootcampsReducer,
});

export default rootReducer;
