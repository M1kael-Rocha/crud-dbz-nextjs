'use client';

import Image from 'next/image';
import styles from '@/app/styles/CharacterCard.module.css';
import { deleteCharacter } from '@/app/lib/credentials-characters';
import { toast } from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { SquarePen, Trash, HandFist, ArrowsUpFromLine } from 'lucide-react';
import Link from 'next/link';

export default function Character({ loggedUserId, ...c }) {
  const deleteAction = async () => {
    const res = await deleteCharacter(c.id);
    toast.success(res.success);
    redirect('/dashboard');
  };

  return (
    <div className={styles['card-container']}>
      <div className={styles['img-card-container']}>
        <Image
          src={c.img}
          className={styles['img-character']}
          fill={true}
          alt={`Imagem do personagem ${c.nome}`}
        />
      </div>

      <div className={styles['name-card-container']}>
        <h3>{c.nome}</h3>
      </div>

      <div className={styles['details-card-container']}>
        <div className={styles['details-row']}>
          <div className={styles['details-character']}>
            <span>Raça: </span>
            <p>{c.raca}</p>
          </div>

          <div className={styles['details-character']}>
            <span>Gênero: </span>
            <p>{c.genero}</p>
          </div>
        </div>

        <div className={styles['details-row']}>
          <div className={styles['details-character']}>
            <span>Base KI: </span>
            <p>{`${c.ki} ${c.baseElevatedBy}`}</p>
          </div>

          <div className={styles['details-character']}>
            <span>Total KI: </span>
            <p>{`${c.maxKi} ${c.totalElevatedBy}`}</p>
          </div>
        </div>

        <div className={styles['details-row']}>
          <div className={styles['details-character-description']}>
            <p>{c.descricao}</p>
          </div>
        </div>
      </div>

      <div className={styles['options-container']}>
        {c.userId === loggedUserId && (
          <Link
            href={`/character/edit/${c.id}`}
            aria-label='Editar'
            title='Editar'
          >
            <SquarePen />
          </Link>
        )}

        {c.userId === loggedUserId && (
          <Link
            href={`/character/techniques/${c.id}`}
            aria-label='Técnicas'
            title='Técnicas'
          >
            <HandFist />
          </Link>
        )}

        {c.userId === loggedUserId && (
          <Link
            href={`/character/transformations/${c.id}`}
            aria-label='Transformações'
            title='Transformações'
          >
            <ArrowsUpFromLine />
          </Link>
        )}

        {c.userId === loggedUserId && (
          <form action={deleteAction}>
            <button type='submit' aria-label='Excluir' title='Excluir'>
              <Trash />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
