import React from 'react';

const SearchForm = ({value, onChange }) => {
  // const [query, setQuery] = useState('')
  
  //   const onSubmit = value => {
  //   setQuery(value);
  // };
  return (
    <form >
      <input
        type="text"
        // autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
