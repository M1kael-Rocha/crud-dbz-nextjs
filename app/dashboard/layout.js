import styles from '@/app/styles/DashboardLayout.module.css';
import ScrollToTop from '@/app/ui/ScrollToTop';

export default function DashboardLayout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <ScrollToTop />
    </>
  );
}
