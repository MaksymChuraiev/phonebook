import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addContacts = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      thunkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    
    }
  }
);

const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
);

const removeContacts = createAsyncThunk(
  'contacts/remove',
  async (contact, thunkAPI) => {
    const { id, ...fields } = contact;

    try {
      const { data } = await axios.patch(`/contacts/${id}`, fields);
      thunkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
);

const contactsOperation = {
  fetchContacts,
  addContacts,
  deleteContacts,
  removeContacts,
};

export default contactsOperation;
