import { deleteSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import styles from '@/app/styles/BtnLogout.module.css';

export default async function LogoutButton() {
  const logoutAction = async () => {
    'use server';
    await deleteSession();
    redirect('/login');
  };

  return (
    <form className={styles['btn-logout-container']} action={logoutAction}>
      <button className={styles['btn-logout']}>Logout</button>
    </form>
  );
}
