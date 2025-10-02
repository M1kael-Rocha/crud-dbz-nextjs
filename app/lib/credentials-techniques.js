'use server';

import { readDb } from '@/app/lib/connection-db';

const file = 'techniques-db.json';

export async function getAllTechniques() {
  return await readDb(file);
}

export async function getTechniqueById(id) {
  const techniques = await readDb(file);
  const technique = techniques.find(t => t.id === id);
  return technique;
}
