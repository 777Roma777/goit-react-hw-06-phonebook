import React from 'react';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, setContacts } from 'components/redux/contactDataReducer';
import { useEffect } from 'react';

const ContactsList = () => {
  const contacts = useSelector(state => state.contactsData.contacts);
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('сontacts');
    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('сontacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <span className={css.textContact}>
            {contact.name}: {contact.number}
          </span>
          <button
            className={css.button}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
