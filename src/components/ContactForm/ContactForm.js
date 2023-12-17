import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyleField,
  StyledButton,
  StyledWrapper,
  StyledError,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[\p{L} ']+$/u, 'Only letters are allowed')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^(0\d{2}-?\d{3}-?\d{2}-?\d{2}|0\d{9})$/,
      'It must be min 7 numbers (000-123-45-67 or 0001234567)'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmitContact = values => {
    const { name, number } = values;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already on contacts.`);
      return;
    }
    dispatch(addContact({ name, number })); //якщо контакта такого нема, діспатчить  новий контакт в список
  };

  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          handleSubmitContact(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyleField type="text" name="name" placeholder="Stepan Bandera" />
            <StyledError name="name" component="p" />
          </Label>

          <Label>
            Number
            <StyleField type="tel" name="number" placeholder="000-111-11-11" />
            <StyledError name="number" component="p" />
          </Label>

          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </StyledWrapper>
  );
};
