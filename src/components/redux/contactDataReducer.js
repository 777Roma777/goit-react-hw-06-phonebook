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
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { setContacts, setFilter } = contactsDataSlice.actions;
// Редюсер слайсу
export const contactsDataReducer = contactsDataSlice.reducer;

// export const contactDataReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contactData/setContacts': {
//       return {
//         ...state,
//         contacts: action.payload,
//       };
//     }
//     case 'contactData/setFilter': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const setContacts = payload => {
//   return {
//     type: 'contactData/setContacts',
//     payload,
//   };
// };

// export const setFilter = payload => {
//   return {
//     type: 'contactData/setFilter',
//     payload,
//   };
// };
