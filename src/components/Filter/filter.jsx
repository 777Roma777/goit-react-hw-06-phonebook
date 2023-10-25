import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/contactDataReducer';

const Filter = () => {
   
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();


  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));

  };


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