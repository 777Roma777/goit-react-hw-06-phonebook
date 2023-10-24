const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export const contactDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'contactData/setContacts': {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case 'contactData/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
