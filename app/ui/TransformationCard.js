'use client';

import Image from 'next/image';
import styles from '@/app/styles/CharacterCard.module.css';

export default function TransformationCard({ ...t }) {
  return (
    <>
      <div className={styles['card-container']}>
        <div className={styles['img-card-container']}>
          <Image
            src={t.img}
            className={styles['img-character']}
            fill={true}
            alt={`Imagem do personagem ${t.nome}`}
          />
        </div>

        <div className={styles['name-card-container']}>
          <h3>{t.nome}</h3>
        </div>
      </div>
    </>
  );
}
