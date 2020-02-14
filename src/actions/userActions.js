import { getUser } from '../services/getUser';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = user => dispatch =>  {
  dispatch({ type: FETCH_USER_LOADING });
  return getUser(user)
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};

export const SET_SEARCH = 'SET_SEACH';
export const setSearch = user => ({
  type: SET_SEARCH,
  payload: user
});
