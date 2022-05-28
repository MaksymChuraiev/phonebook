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
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [contactsOperation.addContacts.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
    },
  },
});
export const { addFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
