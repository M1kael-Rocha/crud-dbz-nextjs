'use server';

import CharacterTransform from '@/app/components/Character/CharacterTransform';
import { getCharacterById } from '@/app/lib/credentials-characters';

export default async function TransformCharacter({ params }) {
  const { id } = await params;
  const character = await getCharacterById(id);

  return <CharacterTransform character={character} />;
}
