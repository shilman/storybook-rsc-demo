import { ComponentProps } from 'react';
import { Card } from './Card';

export async function ApiCard({ id }: { id: number }) {
  let props: ComponentProps<typeof Card>;
  try {
    const res = await fetch(`https://myapi.com/users/${id}`);
    const contact = await res.json();
    props = { state: 'loaded', contact };
  } catch (e) {
    props = { state: 'error' };
  }
  return <Card {...props} />;
}
