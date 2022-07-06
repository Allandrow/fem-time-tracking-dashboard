import { useState } from 'react';
import { useQuery } from 'react-query';
import UserCard from 'components';
import TimeCard, { TimeCardData } from 'components/TimeCard/TimeCard';

export type Time = 'daily' | 'weekly' | 'monthly';

interface FetchData {
  name: string;
  data: TimeCardData[];
}

function App() {
  const [time, setTime] = useState('weekly' as Time);

  const { data } = useQuery<FetchData>('data', () =>
    fetch('data/data.json').then((res) => res.json()),
  );

  if (!data) return null;

  return (
    <section className="grid">
      <UserCard name={data.name} clickHandler={setTime} />
      {data.data.map((cardData) => (
        <TimeCard cardData={cardData} time={time} />
      ))}
    </section>
  );
}

export default App;
