'use server';

import { redirect } from 'next/navigation';
import { readDb, writeDb } from './connection-db';
import { validateSession } from './session';

const file = 'characters-db.json';

export async function getAllCharacters() {
  return await readDb(file);
}

export async function backToDashboard() {
  return redirect('/dashboard');
}

export async function saveCharacter(data) {
  const {
    nome,
    descricao,
    img,
    raca,
    planeta,
    genero,
    ki,
    baseElevatedBy,
    maxKi,
    totalElevatedBy,
  } = data;

  const kiAjust = Number(ki).toFixed(0);
  const maxKiAjust = Number(maxKi).toFixed(0);

  const session = await validateSession();

  const newCharacter = {
    id: crypto.randomUUID(),
    nome,
    descricao,
    img,
    raca,
    planeta,
    genero,
    ki: kiAjust,
    baseElevatedBy,
    maxKi: maxKiAjust,
    totalElevatedBy,
    userId: session.userId,
    techniqueIds: [],
    transformations: [],
  };

  const characters = await readDb(file);

  characters.push(newCharacter);
  await writeDb(characters, file);

  return { success: 'Personagem adicionado!' };
}

export async function deleteCharacter(characterId) {
  const characters = await readDb(file);

  const characterToDelete = characters.findIndex(c => c.id === characterId);
  characters.splice(characterToDelete, 1);
  await writeDb(characters, file);

  return { success: 'Personagem deletado!' };
}

export async function getCharacterById(characterId) {
  const characters = await readDb(file);
  const character = characters.find(c => c.id === characterId);
  return character;
}

export async function editCharacter(data, characterData) {
  const {
    nome,
    descricao,
    img,
    raca,
    planeta,
    genero,
    ki,
    baseElevatedBy,
    maxKi,
    totalElevatedBy,
  } = data;

  const kiAjust = Number(ki).toFixed(0);
  const maxKiAjust = Number(maxKi).toFixed(0);

  const session = await validateSession();

  const editedCharacter = {
    id: characterData.id,
    nome,
    descricao,
    img,
    raca,
    planeta,
    genero,
    ki: kiAjust,
    baseElevatedBy,
    maxKi: maxKiAjust,
    totalElevatedBy,
    userId: session.userId,
    techniqueIds: characterData.techniqueIds,
    transformations: characterData.transformations,
  };

  const characters = await readDb(file);

  const characterIndex = characters.findIndex(c => c.id === characterData.id);

  characters.splice(characterIndex, 1, editedCharacter);
  await writeDb(characters, file);
  return { success: 'Personagem editado!' };
}

export async function inoutTechniques(data, characterId) {
  const characters = await readDb(file);
  const characterIndex = characters.findIndex(c => c.id === characterId);

  characters[characterIndex].techniqueIds = data;
  await writeDb(characters, file);
}

export async function saveTransform(data, characterId) {
  const { nome, img } = data;

  const newTransformation = {
    id: crypto.randomUUID(),
    nome,
    img,
  };

  const characters = await readDb(file);
  const characterIndex = characters.findIndex(c => c.id === characterId);
  characters[characterIndex].transformations.push(newTransformation);

  await writeDb(characters, file);
}
