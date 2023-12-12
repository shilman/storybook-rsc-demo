import { StoryObj, Meta } from '@storybook/react';
import { createMock } from 'storybook-addon-module-mock';

import { DbCard } from './DbCard';
import * as db from './db';
import contacts from './contacts.json';

const meta = {
  component: DbCard,
  parameters: {
    docs: {
      source: { type: 'code' },
    }
  },
} satisfies Meta<typeof DbCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { id: 1 },
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(db, 'findById');
        mock.mockReturnValue(Promise.resolve(contacts.beyonce))
        return [mock];
      },
    },
  },
}

export const Error: Story = {
  args: { id: -1 },
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(db, 'findById');
        mock.mockReturnValue(Promise.reject('Not found'))
        return [mock];
      },
    },
  },
}
