import cardsInfo from './data/constants';
import EllipsisIcon from './assets/icon-ellipsis.svg';

interface TimeFrameValues {
  current: number;
  previous: number;
}

interface TimeFrame {
  daily: TimeFrameValues;
  weekly: TimeFrameValues;
  monthly: TimeFrameValues;
}

export interface TimeCardData {
  title: 'Work' | 'Play' | 'Study' | 'Exercise' | 'Social' | 'Self Care';
  timeframes: TimeFrame;
}

interface TimeCardProps {
  time: 'daily' | 'weekly' | 'monthly';
  cardData: TimeCardData;
}

function TimeCard({ time, cardData }: TimeCardProps) {
  const { className } = cardsInfo.find(
    (item) => item.title === cardData.title,
  )!;
  const classNames = `card time ${className}`;

  const { title, timeframes } = cardData;

  return (
    <article className={classNames}>
      <section>
        <header>
          <h2>{title}</h2>
          <button type="button">
            <img src={EllipsisIcon} alt="options" />
          </button>
        </header>
        <div className="content">
          <b>{timeframes[time].current}hrs</b>
          <p>
            {(time === 'daily' && 'Yesterday') ||
              (time === 'weekly' && 'Last Week') ||
              (time === 'monthly' && 'Last Month')}{' '}
            - {timeframes[time].previous}hrs
          </p>
        </div>
      </section>
    </article>
  );
}

export default TimeCard;
