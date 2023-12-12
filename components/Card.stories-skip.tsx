import { StoryObj, Meta } from '@storybook/react';
import { Card } from './Card';
import contacts from './contacts.json';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    state: 'loading',
  }
}

export const Error: Story = {
  args: {
    state: 'error',
  }
}

export const Beyonce: Story = {
  args: {
    state: 'loaded',
    contact: contacts.beyonce,
  }
}

export const JackBauer: Story = {
  args: {
    state: 'loaded',
    contact: contacts.jackBauer,
  }
}

export const ChuckNorris: Story = {
  args: {
    state: 'loaded',
    contact: contacts.chuckNorris,
  }
}

