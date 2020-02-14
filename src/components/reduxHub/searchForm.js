import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userActions';

const SearchForm = () => {
  const [search, setSearch] = useState('Please Enter a Username');
  const dispatch = useDispatch();

  return (
    <form onSubmit={() => dispatch(fetchUser(search))}>
      <input 
        type="text" 
        value={search} 
        onChange={({ target }) => setSearch(target.value)} />
      <button>Search User</button>
    </form>
  );
};

export default SearchForm;
