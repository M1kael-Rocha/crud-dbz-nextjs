import styles from '@/app/styles/Auth.module.css';

export default function AuthLayout({ children }) {
  return <main className={styles.main}>{children}</main>;
}
