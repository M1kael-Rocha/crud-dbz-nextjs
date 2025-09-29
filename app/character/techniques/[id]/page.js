import {
  getCharacterById,
  inoutTechniques,
} from '@/app/lib/credentials-characters';
import { getAllTechniques } from '@/app/lib/credentials-techniques';
import styles from '@/app/styles/TechniqueCharacter.module.css';
import ScrollToTop from '@/app/ui/ScrollToTop';
import TechniqueCard from '@/app/ui/TechniqueCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { redirect } from 'next/navigation';

const addTechniqueAction = async formData => {
  'use server';
  const characterId = formData.get('characterId');
  const selectedTechniques = formData.getAll('techniqueId');

  await inoutTechniques(selectedTechniques, characterId);
  redirect('/dashboard');
};

export default async function TechniquesCharacter({ params }) {
  const { id } = await params;
  const characterInfo = await getCharacterById(id);
  const characterInfoTechniques = characterInfo.techniqueIds;

  const data = await getAllTechniques();
  const techniques = data.map(t => {
    return (
      <TechniqueCard
        {...t}
        key={t.id}
        isChecked={characterInfoTechniques.includes(t.id)}
      />
    );
  });

  return (
    <>
      <div className={styles['techniques-banner']}>
        <div className={styles['banner-content']}>
          <div className={styles['btn-container']}>
            <Link href={'/dashboard'}>
              <ArrowLeft />
            </Link>
          </div>
          <h1>Adicione Técnicas ao Seu Personagem</h1>
          <p>
            Selecione as habilidades mais icônicas do universo Dragon Ball e
            vincule ao personagem desejado. Aqui você pode registrar golpes
            clássicos, transformações e poderes especiais, mantendo o perfil de
            cada lutador completo e fiel à obra. Assim como Vegeta nunca deixa
            de treinar para superar seus limites, você também pode fortalecer
            seus personagens adicionando novas técnicas e ampliando seu arsenal
            de combate.
          </p>
          <Link href={'#cards'} className={styles['btn-anchor']}>
            Adicionar
          </Link>
        </div>
      </div>

      <h2 id='cards' className={styles['title-h2']}>
        TÉCNICAS
      </h2>
      <div className={styles['divisor']}></div>
      <form className={styles['form-box']} action={addTechniqueAction}>
        <input type='hidden' name='characterId' value={id} />
        <div className={styles['cards-container']}>{techniques}</div>
        <div className={styles['divisor-alt']}></div>
        <button type='submit'>Salvar Técnicas</button>
      </form>
      <ScrollToTop />
    </>
  );
}
