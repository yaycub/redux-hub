import { fetchUser, FETCH_USER_LOADING, FETCH_USER } from './userActions';

jest.mock('../services/getUser.js');

describe('User Actions', () => {
  it('should create a fetch user action', () => {
    const dispatch = jest.fn();
    const action = fetchUser('yaycub');
    
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_USER_LOADING });
        expect(dispatch).toHaveBeenCalledWith({ 
          type: FETCH_USER, 
          payload: {
            name: 'yaycub',
            followers: 36,
            following: 25,
            url: 'https://github.com/yaycub'
          }
        });
      });
  });
});
