import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Label, Input, Button } from '../LoginForm/LoginForm.styled';
import { selectIsError } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import { resetError } from '../../redux/auth/slice';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (isError) {
      Notiflix.Notify.failure(
        'Probably this email is already registered, please try another one.',
        { position: 'center-top', distance: '200px' }
      );

      dispatch(resetError());
    }
  }, [isError, dispatch]);

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
