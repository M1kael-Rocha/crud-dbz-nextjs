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
      <section className={styles['header-container']}>
        <div className={styles['header-logo']}>
          <Link href={'/dashboard/'}>
            <Image
              src={dbzLogo}
              alt='Logo DragonBall'
              width={300}
              height={50}
            />
          </Link>
        </div>
        <div className={styles['header-options-left']}>
          <div className={styles['option-with-img']}>
            <BadgeCheck />
            <a href='https://en.dragon-ball-official.com/' target='_blank'>
              DragonBall Oficial
            </a>
          </div>
          <div className={styles['option-with-img']}>
            <ChevronsLeftRightEllipsis />
            <a href='https://web.dragonball-api.com/' target='_blank'>
              DragonBall API
            </a>
          </div>
        </div>
        <div className={styles['header-options-right']}>
          <div className={styles['content-container']}>
            <div className={styles['content-text-info']}>
              {session ? (
                <>
                  <p className={styles['intro-text']}>{`${headerInfo.text}`}</p>
                  <Link
                    className={styles['btn-profile']}
                    href={`/profile/${headerInfo.userId}`}
                  >
                    Ver Perfil
                  </Link>
                  <LogoutButton />
                </>
              ) : (
                <p className={styles['intro-text']}>{`${headerInfo.text}`}</p>
              )}
            </div>

            <div className={styles['content-img-info']}>
              <Image
                src={headerInfo.image}
                className={styles['intro-img']}
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
