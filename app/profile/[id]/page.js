'use server';

import { getUserById } from '@/app/lib/credentials';
import { getAllCharacters } from '@/app/lib/credentials-characters';
import BtnBackPage from '@/app/ui/BtnBackPage';
import Card from '@/app/ui/CharacterCard.js';
import styles from '@/app/styles/Profile.module.css';
import Image from 'next/image';

export default async function Profile({ params }) {
  const { id } = await params;
  const userProfile = await getUserById(id);
  const data = await getAllCharacters();
  const characters = data
    .filter(c => c.userId === userProfile.id)
    .map(c => <Card {...c} loggedUserId={userProfile.id} key={c.id} />);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <BtnBackPage />
        <h2>Perfil</h2>
        <div className={styles.containerImg}>
          <Image
            src={userProfile.imgProfile}
            width={128}
            height={128}
            alt={`Icone do perfil de ${userProfile.nome}`}
          />
        </div>
        <div className={styles.content}>
          <span>Nome:</span>
          <p>{userProfile.nome}</p>
        </div>
        <div className={styles.content}>
          <span>Email:</span>
          <p>{userProfile.email}</p>
        </div>
      </div>

      <h2>MEUS PERSONAGENS</h2>
      <div className={styles.divisor}></div>
      <div className={styles.containerCards}>{characters}</div>
    </section>
  );
}
