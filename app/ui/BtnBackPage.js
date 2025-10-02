'use client';

import { useRouter } from 'next/navigation';
import styles from '@/app/styles/BtnBackPage.module.css';
import { ArrowLeft } from 'lucide-react';

export default function BtnBackPage() {
  const router = useRouter();
  const handleGoBack = () => router.back();

  return (
    <button onClick={handleGoBack} className={styles.backBtn}>
      <ArrowLeft />
    </button>
  );
}
