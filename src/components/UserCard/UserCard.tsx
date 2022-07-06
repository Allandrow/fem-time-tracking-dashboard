import { Time } from 'App';
import { SyntheticEvent, useState } from 'react';
import ProfileImg from './assets/profile.png';

interface UserCardProps {
  name: string | undefined;
  clickHandler: (time: Time) => void;
}

function UserCard({ name, clickHandler }: UserCardProps) {
  const [active, setActive] = useState('weekly');

  const handleClick = (e: SyntheticEvent) => {
    clickHandler(e.currentTarget.textContent! as Time);
    setActive(e.currentTarget.textContent!);
  };

  const isActive = (buttonName: string) => active === buttonName;

  return (
    <article className="user card">
      <header>
        <img src={ProfileImg} alt="User Profile" />
        <h1>
          <span>Report for</span>
          {name}
        </h1>
      </header>
      <ul>
        <li>
          <button
            type="button"
            onClick={handleClick}
            className={isActive('daily') ? 'active' : ''}>
            daily
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleClick}
            className={isActive('weekly') ? 'active' : ''}>
            weekly
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleClick}
            className={isActive('monthly') ? 'active' : ''}>
            monthly
          </button>
        </li>
      </ul>
    </article>
  );
}

export default UserCard;
