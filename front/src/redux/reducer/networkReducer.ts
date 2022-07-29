import { actionI } from './../../type/reduxType';
import { NETWORK_ERROR } from './../constant';

const initialState = {};

export default function nerworkReducer(state = initialState, action: actionI) {
  switch (action.type) {
    case NETWORK_ERROR: {
      console.log(action.payload);
      return state;
    }
    default:
      return state;
  }
}
