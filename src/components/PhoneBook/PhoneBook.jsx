import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList/';
import { Filter } from 'components/Filter';

import { Wrapper } from './PhoneBook.styled';

export const PhoneBook = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
