import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userActions';

const SearchForm = () => {
  const [search, setSearch] = useState('Please Enter a Username');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUser(search));
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
