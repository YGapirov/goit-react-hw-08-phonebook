import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm />
      <div>{isLoading && 'Loading...'}</div>
      <ContactList />
    </>
  );
}
