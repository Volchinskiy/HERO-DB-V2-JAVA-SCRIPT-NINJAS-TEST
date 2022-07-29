import { NETWORK_ERROR, SET_QUERY_DATA } from './../constant';
import { allHerosT } from './../../type/heroType';

export const setQueryData = (allHeros: allHerosT) => ({
  type: SET_QUERY_DATA,
  payload: allHeros,
});

export const networkError = (error: any) => ({
  type: NETWORK_ERROR,
  payload: error,
});
