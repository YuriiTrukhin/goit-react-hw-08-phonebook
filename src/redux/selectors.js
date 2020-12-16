const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getForm = (state) => state.contacts.items;
const getContactList = (state) =>
  state.contacts.items.filter((contact) => contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()));

// eslint-disable-next-line import/no-anonymous-default-export
export default { getLoading, getFilter, getForm, getContactList };
