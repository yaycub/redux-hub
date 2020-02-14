import reducer from './reposReducer';
import { FETCH_REPOS_LOADING, FETCH_REPOS } from '../actions/repoActions';

describe('User Reducer', () => {
  it('should set loading state with Fetch Repos Loading Action', () => {
    const action = { type: FETCH_REPOS_LOADING };
    const state = { loading: false };

    const newState = reducer(state, action);

    expect(newState).toEqual({ loading: true });
  });

  it('should set repos state with Fetch Repos action', () => {
    const action = { type: FETCH_REPOS, payload: 'im some repos' };
    const state = { repos: null, loading: true };

    const newState = reducer(state, action);

    expect(newState).toEqual({ repos: 'im some repos', loading: false });
  });
  
  it('should return state with an unknown action', () => {
    const action = { type: 'YO DO THA DAMN THING' };
    const state = { repos: 'some repos or anything else' };

    const newState = reducer(state, action);

    expect(newState).toEqual({ repos: 'some repos or anything else' });
  });
});
