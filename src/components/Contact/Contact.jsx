import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, DeleteButton } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem key={id}>
      {name}: {number}
      <DeleteButton onClick={handleDelete} type="button">
        Delete
      </DeleteButton>
    </ListItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
