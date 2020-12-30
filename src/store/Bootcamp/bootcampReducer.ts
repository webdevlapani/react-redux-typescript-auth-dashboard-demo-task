import { IAction } from '../IAction';
import {
  GET_BOOTCAMP_REQUEST,
  GET_BOOTCAMP_REQUEST_FAILURE,
  GET_BOOTCAMP_REQUEST_SUCCESS,
} from './bootcampTypes';
import { IBootcamp } from './IBootcamp';

export interface IBootcampState {
  loading: boolean;
  bootCamps: IBootcamp[];
  error: string;
}

const initialState: IBootcampState = {
  loading: false,
  bootCamps: [],
  error: '',
};

/**
 * bootcamp reducer
 * @param state
 * @param action
 */
const bootCampReducer = (state = initialState, action: IAction): IBootcampState => {
  switch (action.type) {
    case GET_BOOTCAMP_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_BOOTCAMP_REQUEST_SUCCESS:
      debugger;
      const bootCamps = action.payload.map((bootcamp: IBootcamp, index: number) => {
        return {
          key: index,
          name: bootcamp.name,
          email: bootcamp.email,
          phone: bootcamp.phone,
          website: bootcamp.website,
        };
      });
      return {
        ...state,
        loading: false,
        bootCamps,
        error: '',
      };
    case GET_BOOTCAMP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        bootCamps: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bootCampReducer;
