import { getRepos } from '../services/getRepos';

export const FETCH_REPOS_LOADING = 'FETCH_REPOS_LOADING';
export const FETCH_REPOS = 'FETCH_REPOS';
export const fetchRepos = user => dispatch => {
  dispatch({ type: FETCH_REPOS_LOADING });
  return getRepos(user)
    .then(repos => dispatch({
      type: FETCH_REPOS,
      payload: repos
    }));
};
