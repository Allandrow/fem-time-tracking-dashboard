import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimeCard from './TimeCard';

export default {
  title: 'TimeCard',
  component: TimeCard,
} as ComponentMeta<typeof TimeCard>;

const Template: ComponentStory<typeof TimeCard> = (args) => (
  <TimeCard {...args} />
);

export const Work = Template.bind({});

Work.args = {
  time: 'daily',
  cardData: {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
};

Work.parameters = {
  time: {
    values: [
      { name: 'daily', value: 'daily' },
      { name: 'weekly', value: 'weekly' },
      { name: 'monthly', value: 'monthly' },
    ],
  },
};

export const Play = Template.bind({});

Play.args = {
  time: 'daily',
  cardData: {
    title: 'Play',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
};

Play.parameters = {
  time: {
    values: [
      { name: 'daily', value: 'daily' },
      { name: 'weekly', value: 'weekly' },
      { name: 'monthly', value: 'monthly' },
    ],
  },
};

export const Study = Template.bind({});

Study.args = {
  time: 'weekly',
  cardData: {
    title: 'Study',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
};

Study.parameters = {
  time: {
    values: [
      { name: 'daily', value: 'daily' },
      { name: 'weekly', value: 'weekly' },
      { name: 'monthly', value: 'monthly' },
    ],
  },
};

export const Exercise = Template.bind({});

Exercise.args = {
  time: 'weekly',
  cardData: {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
};

Exercise.parameters = {
  time: {
    values: [
      { name: 'daily', value: 'daily' },
      { name: 'weekly', value: 'weekly' },
      { name: 'monthly', value: 'monthly' },
    ],
  },
};

export const Social = Template.bind({});

Social.args = {
  time: 'weekly',
  cardData: {
    title: 'Social',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
};

Social.parameters = {
  time: {
    values: [
      { name: 'daily', value: 'daily' },
      { name: 'weekly', value: 'weekly' },
      { name: 'monthly', value: 'monthly' },
    ],
  },
};

export const SelfCare = Template.bind({});

SelfCare.args = {
  time: 'weekly',
  cardData: {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
};

SelfCare.parameters = {
  time: {
    values: [
      { name: 'daily', value: 'daily' },
      { name: 'weekly', value: 'weekly' },
      { name: 'monthly', value: 'monthly' },
    ],
  },
};
