'use client';

import styles from '@/app/styles/TechniqueCard.module.css';
import { Flame } from 'lucide-react';

export default function TechniqueCard({ isChecked, ...t }) {
  return (
    <label className={styles.container}>
      <input
        className={styles.hiddenCheckbox}
        type='checkbox'
        name='techniqueId'
        value={t.id}
        defaultChecked={isChecked}
      />

      <div className={styles.icon}>
        <Flame />
      </div>
      <div className={styles.content}>
        <h3>{t.nome}</h3>
        <p>{t.descricao}</p>
      </div>
    </label>
  );
}
