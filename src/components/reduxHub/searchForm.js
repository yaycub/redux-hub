import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import { fetchRepos } from '../../actions/repoActions';

const SearchForm = () => {
  const [search, setSearch] = useState('Github UserName');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUser(search));
    dispatch(fetchRepos(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={search} 
        onChange={({ target }) => setSearch(target.value)} />
      <button>Search User</button>
    </form>
  );
};

export default SearchForm;
