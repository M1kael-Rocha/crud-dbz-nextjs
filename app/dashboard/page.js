import Link from 'next/link';
import { getAllCharacters } from '@/app/lib/credentials-characters';
import Card from '@/app/ui/CharacterCard';
import styles from '@/app/styles/DashboardContent.module.css';
import { validateSession } from '@/app/lib/session.js';
import { Suspense } from 'react';
import Spinner from '@/app/ui/Spinner';

export default async function Dashboard() {
  const data = await getAllCharacters();
  const session = await validateSession();
  const loggedUserId = session.userId;

  const charactersCard = data.map(c => {
    return <Card {...c} loggedUserId={loggedUserId} key={c.id} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h1>Universo de Dragon Ball</h1>
          <p>
            Aqui você pode construir sua própria coleção de personagens do
            universo Dragon Ball. Adicione guerreiros lendários, vilões
            marcantes e heróis inesquecíveis, organizando cada detalhe como
            quiser. Seja para revisitar batalhas épicas ou explorar
            transformações únicas, este espaço foi feito para reunir todo o
            legado da obra em um só lugar. Comece agora e dê vida ao seu
            catálogo personalizado.
          </p>
          <Link href={'/character/create/'} className={styles.btnCreate}>
            Adicionar
          </Link>
        </div>
      </div>

      <h2>PERSONAGENS</h2>
      <div className={styles.divisor}></div>

      <Suspense fallback={<Spinner />}>
        <div className={styles.containerCards}>{charactersCard}</div>
      </Suspense>
    </div>
  );
}
