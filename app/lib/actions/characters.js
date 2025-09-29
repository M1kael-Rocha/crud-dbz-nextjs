'use server';

import { CharacterSchema, CharacterTransformSchema } from '@/app/lib/schemas';
import { redirect } from 'next/navigation';
import {
  saveCharacter,
  editCharacter,
  getCharacterById,
  saveTransform,
} from '@/app/lib/credentials-characters';

export async function createNewCharacterAction(prevState, formData) {
  const inpFormData = Object.fromEntries(formData.entries());

  const validateFields = CharacterSchema.safeParse(inpFormData);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os campos.',
    };
  }

  await saveCharacter(validateFields.data);
  redirect('/dashboard');
}

export async function editCharacterAction(prevState, formData) {
  const inpFormData = Object.fromEntries(formData.entries());
  const characterId = inpFormData.idCharacter;

  const characterData = await getCharacterById(characterId);

  const validateFields = CharacterSchema.safeParse(inpFormData);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os campos.',
    };
  }

  await editCharacter(validateFields.data, characterData);
  redirect('/dashboard');
}

export async function addCharacterTransformAction(prevState, formData) {
  const inpFormData = Object.fromEntries(formData.entries());
  const characterId = inpFormData.idCharacter;

  const validateFields = CharacterTransformSchema.safeParse(inpFormData);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os campos.',
    };
  }

  await saveTransform(validateFields.data, characterId);
  redirect('/dashboard');
}
