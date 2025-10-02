'use server';

import { getCharacterById } from '@/app/lib/credentials-characters';
import { getTechniqueById } from '@/app/lib/credentials-techniques';
import DetailsCharacter from '@/app/ui/CharacterProfile';

export default async function CharacterProfile({ params }) {
  const { id } = await params;
  const characterInfo = await getCharacterById(id);
  const techniques = characterInfo.techniqueIds;
  const technique = await techniques.map(async t => await getTechniqueById(t));
  console.log(technique);

  return <DetailsCharacter characterInfo={characterInfo} />;
}
