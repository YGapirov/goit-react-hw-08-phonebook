import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading, selectError } from '../redux/selectors';
import { Filter } from '../components/Filter/Filter';
import { ContactsWrapper, ContactsTitle } from './Contacts.styled';
import { Loader } from '../components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(state => state.contacts.items);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <ContactsWrapper>
      <ContactForm />
      <ContactsTitle>Your contacts:</ContactsTitle>
      {contacts.length > 0 ? <Filter /> : <p>You don't have any contacts</p>}
      {isLoading && <Loader isLoading={isLoading} />}
      <ContactList />
      {error && <p>{error}</p>}
    </ContactsWrapper>
  );
}
