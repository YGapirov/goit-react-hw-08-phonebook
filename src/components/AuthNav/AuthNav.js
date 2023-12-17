import { AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </div>
  );
};
