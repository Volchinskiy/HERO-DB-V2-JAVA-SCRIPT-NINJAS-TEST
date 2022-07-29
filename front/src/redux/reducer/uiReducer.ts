import { TOGGLE_ADD_HERO_ARE } from './../constant';
import { actionI } from './../../type/reduxType';

const initialState = {
  showAddHeroArea: false,
};

export default function uiReducer(state = initialState, action: actionI) {
  switch (action.type) {
    case TOGGLE_ADD_HERO_ARE: {
      return {
        ...state,
        showAddHeroArea: !state.showAddHeroArea,
      };
    }
    default: {
      return state;
    }
  }
}
