import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form, Label, Input, Button } from './LoginForm.styled';
import { useEffect } from 'react';
import { resetError } from '../../redux/auth/slice';
import { selectIsError } from '../../redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (isError) {
      Notiflix.Notify.failure(
        'Your email or password is incorrect. Please try again.',
        { position: 'center-top', distance: '200px' }
      );

      dispatch(resetError());
    }
  }, [isError, dispatch]);

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
