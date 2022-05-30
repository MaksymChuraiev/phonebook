import { createSlice } from '@reduxjs/toolkit';
import contactsOperation from './contacts-operation';

const initialState = {
  items: [],
  filter: '',
  isLoading: true,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperation.fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [contactsOperation.fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperation.fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [contactsOperation.addContacts.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
    },
    [contactsOperation.addContacts.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperation.addContacts.rejected]: state => {
      state.isLoading = false;
    },
    [contactsOperation.deleteContacts.fulfilled]: state => {
      state.isLoading = false;
    },
    [contactsOperation.deleteContacts.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperation.deleteContacts.rejected]: state => {
      state.isLoading = false;
    },
    [contactsOperation.removeContacts.fulfilled]: (state, action) => {
      state.items.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state.isLoading = false;
    },
    [contactsOperation.removeContacts.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperation.removeContacts.rejected]: state => {
      state.isLoading = false;
    },
  },
});
export const { addFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
