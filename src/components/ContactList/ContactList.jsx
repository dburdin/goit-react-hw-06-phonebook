import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

const getVisibleContacts = (contacts, query) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
