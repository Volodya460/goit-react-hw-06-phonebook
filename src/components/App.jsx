import { nanoid } from 'nanoid';
import ContactForm from '../components/Form/Form';
import Filter from '../components/FilterContacts/Filter';
import CreatContactList from './ContactList/CreatContactList';
import { Section } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, getUserInf } from 'redux/contactSlice';

export function App() {
  const state = useSelector(getUserInf);

  const dispatch = useDispatch();

  function hendleSubmit(values, { resetForm }) {
    const contact = {
      id: nanoid(),
      ...values,
    };
    const isAdded = checkContactIsAdded(contact);

    if (isAdded) {
      resetForm();
      return alert(`${contact.name} is already in contacts`);
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          ...values,
        })
      );
      resetForm();
    }
  }

  function checkContactIsAdded({ name }) {
    const normalizedContactName = name.toLowerCase();

    return state.find(
      ({ name }) => name.toLowerCase() === normalizedContactName
    );
  }

  return (
    <Section>
      <ContactForm hendleSubmit={hendleSubmit} />
      <h2>Contacts</h2>
      <h2>Find Contacts by name</h2>
      <Filter />
      <CreatContactList />
    </Section>
  );
}
