import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return filter
      ? contacts.filter((el) => {
          return el.name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;
  }
);
