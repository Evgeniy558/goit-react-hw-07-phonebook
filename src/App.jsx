import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import Form from "./components/contactForm/ContactsForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

import { selectFilteredContacts, selectIsLoading } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";

export const App = () => {
  const displayContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className={css.appheader}>
        <section className={css.section}>
          <h1>Phonebook</h1>
          <Form />
        </section>
        <section className={css.section}>
          <h2>Contacts</h2>
          <Filter />
          {isLoading ? (
            <p>Loading</p>
          ) : displayContacts.length > 0 ? (
            <ContactList displayedContacts={displayContacts} />
          ) : (
            <p> No contacts </p>
          )}
        </section>
      </header>
    </div>
  );
};
