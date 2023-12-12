import { ComponentProps } from 'react';
import { Card } from './Card';
import { findById } from './db';

export async function DbCard({ id }: {id: number}) {
  let props: ComponentProps<typeof Card>;
  try {
    const contact = await findById(id);
    props = { state: 'loaded', contact };
  } catch (e) {
    props = { state: 'error' };
  }
  return <Card {...props} />;
}
