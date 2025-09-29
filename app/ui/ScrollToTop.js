'use client';

import { ArrowUp } from 'lucide-react';
import styles from '@/app/styles/BtnScrollToTop.module.css';

export default function ScrollToTop() {
  const scrollAction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={styles['btn-box']} onClick={scrollAction}>
      <ArrowUp />
    </button>
  );
}
