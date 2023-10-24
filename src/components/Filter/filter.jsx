import React from 'react';
import css from './filter.module.css';

 const Filter = ({ filter, handleFilterChange }) => {
  return (
    <label>
      <p className={css.textFilter}>Find contacts by name</p>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      />
    </label>
  );
};

export default Filter;