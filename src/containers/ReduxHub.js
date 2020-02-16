import React from 'react';
import SearchForm from '../components/reduxHub/searchForm';
import UserInfo from '../components/reduxHub/userInfo';
import Repos from '../components/reduxHub/Repos';

const ReduxHub = () => {

  return (
    <>
      <SearchForm />
      <UserInfo />
      <Repos />
    </>
  );
};

export default ReduxHub;
