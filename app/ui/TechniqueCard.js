'use client';

import { Flame } from 'lucide-react';
import styles from '@/app/styles/TechniqueCard.module.css';

export default function TechniqueCard({ isChecked, ...t }) {
  return (
    <label className={styles['card-container']}>
      <input
        className={styles['hidden-checkbox']}
        type='checkbox'
        name='techniqueId'
        value={t.id}
        defaultChecked={isChecked}
      />

      <div className={styles['card-icon']}>
        <Flame />
      </div>
      <div className={styles['card-content']}>
        <h3>{t.nome}</h3>
        <p>{t.descricao}</p>
      </div>
    </label>
  );
}
