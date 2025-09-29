import styles from '@/app/styles/CharacterLayout.module.css';

export default function CharacterLayout({ children }) {
  return <main className={styles['main-character']}>{children}</main>;
}
