import { contactsReducer } from "./slices/contactsSlice";
import { filterReducer } from "./slices/filterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
