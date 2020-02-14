export const getRepos = () => (
  Promise.resolve([
    { name: 'repo1', url: 'www.somerepo.com' },
    { name: 'repo2', url: 'www.somerepo2.com' }
  ])
);
