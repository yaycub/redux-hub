import { fetchRepos, FETCH_REPOS_LOADING, FETCH_REPOS } from './repoActions';

jest.mock('../services/getRepos.js');

describe('Repo Actions', () => {
  it('should create fetch repos action', () => {
    const dispatch = jest.fn();
    const action = fetchRepos('yayub');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_REPOS_LOADING });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_REPOS,
          payload: [
            { name: 'repo1', url: 'www.somerepo.com' },
            { name: 'repo2', url: 'www.somerepo2.com' }
          ]
        });
      });
  });
});
