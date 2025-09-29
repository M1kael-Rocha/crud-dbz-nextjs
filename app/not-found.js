import styles from '@/app/styles/Page404.module.css';
import img404 from '@/public/404.png';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <>
      <div className={styles['container']}>
        <h1>Erro 404</h1>
        <p>
          Oops! Parece que esta página se perdeu na busca pelas Esferas do
          Dragão. Que tal voltar para a Corporação Cápsula?
        </p>
        <Image src={img404} width={520} height={340} alt='Imagem do erro 404' />
      </div>
    </>
  );
}
