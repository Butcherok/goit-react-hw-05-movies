import React, { useState } from 'react';
import PropTypes from 'prop-types';


const SearchForm = ({ setSearchParams }) => {
  const [querySearch, setQuerySearch] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!querySearch.trim()) return;
    setSearchParams({ query: querySearch.trim().toLowerCase() });
    setQuerySearch('');
  };

  const onHandleChange = e => {
    const { value } = e.currentTarget;
    setQuerySearch(value);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={querySearch}
        onChange={onHandleChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

SearchForm.propTypes = { setSearchParams: PropTypes.func.isRequired };

export default SearchForm;
