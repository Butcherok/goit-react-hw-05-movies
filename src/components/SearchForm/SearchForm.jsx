import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BtnForm, Form, InputForm } from './SearchForm.styled';

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
    <Form onSubmit={onHandleSubmit}>
      <InputForm
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={querySearch}
        onChange={onHandleChange}
      />
      <BtnForm type="submit">
        <span>Search</span>
      </BtnForm>
    </Form>
  );
};

SearchForm.propTypes = { setSearchParams: PropTypes.func.isRequired };

export default SearchForm;
