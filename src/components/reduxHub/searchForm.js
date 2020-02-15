import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setSearch } from '../../actions/userActions';
import { selectUserSearchState } from '../../selectors/selectUserState';

const SearchForm = () => {
  const search = useSelector(selectUserSearchState);
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
        onChange={({ target }) => dispatch(setSearch(target.value))} />
      <button>Search User</button>
    </form>
  );
};

export default SearchForm;
