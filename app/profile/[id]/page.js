'use server';

import { getUserById } from '@/app/lib/credentials';
import { getAllCharacters } from '@/app/lib/credentials-characters';
import Card from '@/app/ui/CharacterCard.js';
import { ArrowLeft } from 'lucide-react';
import styles from '@/app/styles/Profile.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default async function Profile({ params }) {
  const { id } = await params;
  const userProfile = await getUserById(id);
  const data = await getAllCharacters();
  const characters = data
    .filter(c => c.userId === userProfile.id)
    .map(c => <Card {...c} loggedUserId={userProfile.id} key={c.id} />);

  return (
    <div className={styles['profile-container']}>
      <div className={styles['profile-box']}>
        <div className={styles['btn-container']}>
          <Link href={'/dashboard'}>
            <ArrowLeft />
          </Link>
        </div>
        <h2>Perfil</h2>
        <div className={styles['profile-img-container']}>
          <Image
            src={userProfile.imgProfile}
            width={128}
            height={128}
            alt={`Icone do perfil de ${userProfile.nome}`}
          />
        </div>
        <div className={styles['profile-details']}>
          <span>Nome:</span>
          <p>{userProfile.nome}</p>
        </div>
        <div className={styles['profile-details']}>
          <span>Email:</span>
          <p>{userProfile.email}</p>
        </div>
      </div>

      <h2>MEUS PERSONAGENS</h2>
      <div className={styles['divisor']}></div>
      <div className={styles['cards-container']}>{characters}</div>
    </div>
  );
}
