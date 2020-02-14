import { selectRepoState, selectRepoLoadingState } from './selectRepoState';

describe('Repos State Selector', () => {
  it('should select repos from repoData', () => {
    const state = {
      repoData: {
        repos: ['some', 'data']
      }
    };

    expect(selectRepoState(state)).toEqual(['some', 'data']);
  });

  it('should select loading state from repoData', () => {
    const state = {
      repoData: {
        loading: true
      }
    };

    expect(selectRepoLoadingState(state)).toEqual(true);
  });
});
