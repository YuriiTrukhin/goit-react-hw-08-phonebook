import { combineReducers } from "redux";
import contactsActions from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: [],
  filter: "",
};

const newContact = (state, action) => [...state, action.payload];
const removeContact = (state, action) => state.filter((contact) => contact.id !== action.payload);

const items = createReducer(INITIAL_STATE.contacts, {
  [contactsActions.addContactSuccess]: newContact,
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.removeContactsSuccess]: removeContact,
});

const filter = createReducer(INITIAL_STATE.filter, {
  [contactsActions.filterRender]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
});

export default combineReducers({ items, filter, loading });
