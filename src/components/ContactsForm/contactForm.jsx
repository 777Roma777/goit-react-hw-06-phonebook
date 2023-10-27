import React from 'react';
import css from './contactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactDataReducer';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contactsData.contacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContact = (name, number) => {
    if (!name || !number) {
      
      return;
    }

    const isPresent = contacts.some(
      contact =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isPresent) {
      alert(`${name} is already in contacts! Please enter a different name`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <p className={css.descriptionInput}>Name</p>
        <input
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.descriptionInput}>Number</p>
        <input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          required
        ></input>
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
