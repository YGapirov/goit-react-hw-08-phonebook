import { HomeTitle } from './Home.styled';
import { useAuth } from '../../hooks/useAuth';
export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <HomeTitle>
        Welcome, {user.name} to Phonebook!{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitle>
    </div>
  );
}
