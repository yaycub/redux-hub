import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserState, selectUserLoadingState } from '../../selectors/selectUserState';

const UserInfo = () => {
  const { 
    name, 
    followers, 
    following, 
    url } = useSelector(selectUserState);

  const loading = useSelector(selectUserLoadingState);

  if(loading) return <p>Loading...</p>;

  return (
    <section>
      <h2>{name}</h2>
      <ul>
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
        <li><a 
          target='_blank' 
          rel='noopener noreferrer' 
          href={url} >Link to Profile</a></li>
      </ul>
    </section>
  );
};

export default UserInfo;
