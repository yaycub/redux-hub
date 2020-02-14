
import reducer from './userReducer';
import { FETCH_USER_LOADING, FETCH_USER } from '../actions/userActions';

describe('User Reducer', () => {
  it('should set loading state with Fetch User Loading action', () => {
    const action = { type: FETCH_USER_LOADING };
    const state = { loading: false };
    
    const newState = reducer(state, action);

    expect(newState).toEqual({ loading: true });
  });

  it('should set user state with Fetch user action', () => {
    const action = { 
      type: FETCH_USER, 
      payload: {
        name: 'yaycub',
        follower: 25
      } 
    };
    const state = { user: null, loading: true };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      user: {
        name: 'yaycub',
        follower: 25
      }
    });
  });

  it('should return state with an unkown action', () => {
    const action = { type: 'HEY DONT YOU DARE' };
    const state = { user: null, loading: true };

    const newState = reducer(state, action);

    expect(newState).toEqual({ user: null, loading: true });
  });
});
