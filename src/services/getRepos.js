export const getRepos = (user) => {
  return fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    })
    .then(res => {
      return res.map(repo => ({
        name: repo.name,
        url: repo.html_url
      }));
    });
};
