const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const isLoading = state => state.contacts.isLoading;

const contactsSelectors = {
  getContacts,
  getFilter,
  isLoading,
};

export default contactsSelectors;
