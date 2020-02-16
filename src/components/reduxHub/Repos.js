import React from 'react';
import { useSelector } from 'react-redux';
import { selectRepoState, selectRepoLoadingState } from '../../selectors/selectRepoState';
import Repo from './Repo';

const Repos = () => {
  const repos = useSelector(selectRepoState);
  const loading = useSelector(selectRepoLoadingState);

  const reposEls = repos.map(repo => (
    <li key={repo.name}>
      <Repo {...repo} />
    </li>
  ));

  if(loading) <p></p>;

  return (
    <ul>
      {reposEls}
    </ul>
  );
};

export default Repos;
