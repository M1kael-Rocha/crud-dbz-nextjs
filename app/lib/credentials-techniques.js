'use server';

import { readDb, writeDb } from './connection-db';

const file = 'techniques-db.json';

export async function getAllTechniques() {
  return await readDb(file);
}
