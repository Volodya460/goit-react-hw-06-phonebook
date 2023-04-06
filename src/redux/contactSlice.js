import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    filterDisplay: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterDisplay } =
  contactSlice.actions;

export const getUserInf = state => state.user.contacts;
export const getInputFilter = state => state.user.filter;
