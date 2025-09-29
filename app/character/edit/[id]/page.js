'use server';
import { getCharacterById } from '@/app/lib/credentials-characters';
import FormToEdit from '@/app/components/Character/CharacterEdit';

export default async function EditCharacter({ params }) {
  const { id } = await params;
  const characterToEdit = await getCharacterById(id);

  return <FormToEdit characterToEdit={characterToEdit} />;
}
