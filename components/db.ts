import fs from 'fs';
import type { Contact } from './types';

export async function findById(id: number) {
  const contacts = JSON.parse(fs.readFileSync('./contacts.json', 'utf8'));
  const db = Object.values(contacts);
  return db[id - 1] as Contact;
}
