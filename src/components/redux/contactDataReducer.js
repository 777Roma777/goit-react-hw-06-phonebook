import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactsDataSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { setContacts, deleteContact, addContact, setFilter } = contactsDataSlice.actions;

// Редюсер слайсу
export const contactsDataReducer = contactsDataSlice.reducer;
