import { fetchUser } from './userActions';

describe('User Actions', () => {
  it('should create a fetch user action', () => {
    const action = fetchUser();
    expect(action).toEqual({
    });
  });
});
