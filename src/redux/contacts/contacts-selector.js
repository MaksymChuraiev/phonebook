const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const isFetching = state => state.contacts.isLoading;

const contactsSelectors = {
  getContacts,
  getFilter,
  isFetching,
};

export default contactsSelectors;
