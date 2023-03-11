import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  fetchContactsSuccessReducer,
  addContactSuccessReducer,
  deleteContactSuccessReducer,
  pendingReducer,
  fulfilledReducer,
  rejectedReducer,
} from './reducers';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filteredContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;

export const { filteredContact } = contactsSlice.actions;
