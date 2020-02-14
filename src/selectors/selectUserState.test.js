import { selectUserState } from './selectUserState';

describe('User State Selector', () => {
  it('should select user from state', () => {
    const state = { userData: 
      {
        user: {
          name: 'yaycub',
          follower: 1000000
        }
      } 
    };

    expect(selectUserState(state)).toEqual({
      name: 'yaycub',
      follower: 1000000
    });
  });
});
