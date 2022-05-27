import { createSlice } from '@reduxjs/toolkit';
import contactsOperation from './contacts-operation';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperation.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperation.addContacts.fulfilled](state, action) {
      state = action.payload;
    },
  },
});

export default contactsSlice.reducer;
