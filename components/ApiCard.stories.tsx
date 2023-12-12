import { StoryObj, Meta } from '@storybook/react';
import { mswLoader } from 'msw-storybook-addon'
import { rest } from 'msw';

import { ApiCard } from './ApiCard';
import contacts from './contacts.json';

const meta = {
  component: ApiCard,
  loaders: [mswLoader],
  parameters: {
    docs: {
      source: { type: 'code' },
    }
  },
} satisfies Meta<typeof ApiCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { id: 1 },
  parameters: {
    msw: {
      handlers: [
        rest.get('https://myapi.com/*', (req, res, ctx) => {
          return res(ctx.json(contacts.beyonce))
        })
      ]
    }
  }
}

export const Error: Story = {
  args: { id: -1 },
  parameters: {
    msw: {
      handlers: [
        rest.get('https://myapi.com/*', (req, res, ctx) => {
          return res(ctx.status(500))
        })
      ]
    }
  }
}