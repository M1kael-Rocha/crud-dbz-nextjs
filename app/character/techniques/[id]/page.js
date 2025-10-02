import {
  getCharacterById,
  inoutTechniques,
} from '@/app/lib/credentials-characters';
import { getAllTechniques } from '@/app/lib/credentials-techniques';
import styles from '@/app/styles/TechniqueCharacter.module.css';
import ScrollToTop from '@/app/ui/ScrollToTop';
import BtnBackPage from '@/app/ui/BtnBackPage';
import TechniqueCard from '@/app/ui/TechniqueCard';
import Link from 'next/link';
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
      <div className={styles.banner}>
        <div className={styles.content}>
          <BtnBackPage />
          <h2>Adicione Técnicas ao Seu Personagem</h2>
          <p>
            Selecione as habilidades mais icônicas do universo Dragon Ball e
            vincule ao personagem desejado. Aqui você pode registrar golpes
            clássicos, transformações e poderes especiais, mantendo o perfil de
            cada lutador completo e fiel à obra. Assim como Vegeta nunca deixa
            de treinar para superar seus limites, você também pode fortalecer
            seus personagens adicionando novas técnicas e ampliando seu arsenal
            de combate.
          </p>
          <Link href={'#cards'} className={styles.btnAnchor}>
            Adicionar
          </Link>
        </div>
      </div>

      <h2 id='cards' className={styles.titleH2}>
        TÉCNICAS
      </h2>
      <div className={styles.divisor}></div>
      <form className={styles.containerForm} action={addTechniqueAction}>
        <input type='hidden' name='characterId' value={id} />
        <div className={styles.container}>{techniques}</div>
        <div className={styles.divisorAlt}></div>
        <button type='submit'>Salvar Técnicas</button>
      </form>
      <ScrollToTop />
    </>
  );
}
