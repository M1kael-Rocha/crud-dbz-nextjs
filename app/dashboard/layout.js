import styles from '@/app/styles/DashboardLayout.module.css';
import ScrollToTop from '@/app/ui/ScrollToTop';

export default function AuthLayout({ children }) {
  return (
    <>
      <main className={styles['main-dashboard']}>{children}</main>
      <ScrollToTop />
    </>
  );
}
