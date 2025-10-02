import styles from '@/app/styles/Header.module.css';
import Image from 'next/image';
import { validateSession } from '../../lib/session';
import LogoutButton from '@/app/ui/BtnLogout';
import dbzLogo from '@/public/Dragon_Ball_Z_logo.svg';
import { BadgeCheck, ChevronsLeftRightEllipsis } from 'lucide-react';
import introIcon from '@/public/icon-intro.jpg';
import Link from 'next/link';
import { getUserById } from '@/app/lib/credentials';

export default async function Header() {
  const session = await validateSession();
  let headerInfo;

  if (session) {
    const user = await getUserById(session.userId);

    headerInfo = {
      text: `Olá, ${user.nome}`,
      image: user.imgProfile,
      altText: 'Icone do perfil',
      isLogged: true,
      userId: user.id,
    };
  } else {
    headerInfo = {
      text: 'Oi, sou o Goku',
      image: introIcon,
      altText: 'Icone de Introdução',
      isLogged: false,
    };
  }

  return (
    <header>
      <section className={styles.header}>
        <div className={styles.logo}>
          <Link href={'/dashboard/'}>
            <Image
              src={dbzLogo}
              alt='Logo DragonBall'
              width={300}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.contentLeft}>
          <div className={styles.navOption}>
            <BadgeCheck />
            <a href='https://en.dragon-ball-official.com/' target='_blank'>
              DragonBall Oficial
            </a>
          </div>
          <div className={styles.navOption}>
            <ChevronsLeftRightEllipsis />
            <a href='https://web.dragonball-api.com/' target='_blank'>
              DragonBall API
            </a>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.containerSplit}>
            <div className={styles.textContent}>
              {session ? (
                <>
                  <p className={styles.p}>{`${headerInfo.text}`}</p>
                  <Link
                    className={styles.btnProfile}
                    href={`/profile/${headerInfo.userId}`}
                  >
                    Ver Perfil
                  </Link>
                  <LogoutButton />
                </>
              ) : (
                <p className={styles.p}>{`${headerInfo.text}`}</p>
              )}
            </div>

            <div className={styles.containerImg}>
              <Image
                src={headerInfo.image}
                className={styles.img}
                fill={true}
                alt={session ? `Icone do perfil` : `Icone de Introdução`}
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
