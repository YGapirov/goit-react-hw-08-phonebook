import { HomeTitle } from './Home.styled';

export default function Home() {
  return (
    <div>
      <HomeTitle>
        Welcome to Phonebook!{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitle>
    </div>
  );
}
