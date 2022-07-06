interface CardsInfo {
  title: 'Work' | 'Play' | 'Study' | 'Exercise' | 'Social' | 'Self Care';
  className: 'work' | 'play' | 'study' | 'exercise' | 'social' | 'self-care';
}

const cardsInfo: CardsInfo[] = [
  {
    title: 'Work',
    className: 'work',
  },
  {
    title: 'Play',
    className: 'play',
  },
  {
    title: 'Study',
    className: 'study',
  },
  {
    title: 'Exercise',
    className: 'exercise',
  },
  {
    title: 'Social',
    className: 'social',
  },
  {
    title: 'Self Care',
    className: 'self-care',
  },
];

export default cardsInfo;
