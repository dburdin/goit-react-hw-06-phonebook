import { Formik, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import { Form, FormLabel, Field, SubmitButton } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const initialValues = { name: '', number: '' };

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),
  number: Yup.string()
    .min(5, 'Too Short!')
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const getSimiliarContact = (contact, formData) =>
    contact.filter(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

  const handleSubmit = (data, { resetForm }) => {
    const similiarName = getSimiliarContact(contacts, data);

    if (similiarName[0]) {
      return window.alert(`${data.name} is already in contacts!`);
    }

    dispatch(addContact({ ...data }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          <span>Name</span>
          <Field id="name" type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            style={{ color: 'red', fontSize: '11px' }}
          ></ErrorMessage>
        </FormLabel>
        <FormLabel htmlFor="number">
          <span>Number</span>
          <Field id="number" type="tel" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: 'red', fontSize: '11px' }}
          ></ErrorMessage>
        </FormLabel>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </Formik>
  );
};
