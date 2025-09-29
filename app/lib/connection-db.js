import { promises as fs } from 'fs';
import path from 'path';

export async function readDb(file) {
  const dbPath = path.join(process.cwd(), 'app', 'db', file);
  const dbData = await fs.readFile(dbPath, 'utf-8');

  return JSON.parse(dbData);
}

export async function writeDb(newData, file) {
  const dbPath = path.join(process.cwd(), 'app', 'db', file);
  await fs.writeFile(dbPath, JSON.stringify(newData, null, 2));
}
