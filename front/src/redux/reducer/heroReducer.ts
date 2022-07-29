import { actionI } from './../../type/reduxType';
import { SET_QUERY_DATA } from './../constant';

const initialState = {
  allHeroes: [],
};

export default function heroReducer(state = initialState, action: actionI) {
  switch (action.type) {
    case SET_QUERY_DATA: {
      return {
        ...state,
        allHeroes: action.payload,
      };
    }
    default:
      return state;
  }
}
