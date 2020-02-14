export const getUser = (user) => {
  return fetch(`https://api.github.com/users/${user}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    })
    .then(({ login, followers, following, html_url }) => ({
      name: login,
      followers,
      following,
      url: html_url
    }));
};
