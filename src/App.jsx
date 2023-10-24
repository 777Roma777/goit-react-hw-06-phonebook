import React from 'react';
import ContactForm from 'components/ContactsForm/contactForm';
import ContactsList from 'components/ContactsList/contactList';
import Filter from 'components/Filter/filter';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contactData.contacts);
  const filter = useSelector(state => state.contactData.filter);

  const dispatch = useDispatch();
  
  const handleAddContact = (name, number) => {
    if (name.trim() === '' || number.trim() === '') return;

    const isPresent = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
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
    dispatch({
      type: 'contactData/setContacts',
      payload: [...contacts, newContact],
    });
    // setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = e => {
    dispatch({ type: 'contactData/setFilter', payload: e.target.value });
    // setFilter(e.target.value);
  };

  const handleDeleteContact = contactId => {
    dispatch({
      type: 'contactData/setContacts',
      payload: contacts.filter(contact => contact.id !== contactId),
    });
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('Contacts');
    if (savedContacts) {
      // setContacts(JSON.parse(savedContacts));
      dispatch({
        type: 'contactData/setContacts',
        payload: JSON.parse(savedContacts),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="container">
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2 className="contacts">Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactsList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
