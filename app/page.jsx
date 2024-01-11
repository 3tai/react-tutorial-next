import LikeButton from './like-button';

// Header component 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

// Homepage Component
export default function HomePage() {
  // list of names to be used in <ul>
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
     </div>
  );
}