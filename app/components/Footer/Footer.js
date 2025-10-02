import styles from '@/app/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <section className={styles.footer}>
        <p>
          &copy; 2025 | Feito por{' '}
          <a href='https://github.com/M1kael-Rocha' target='_blank'>
            LEAK
          </a>
        </p>
      </section>
    </footer>
  );
}
