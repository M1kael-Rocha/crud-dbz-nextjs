'use client';

import { addCharacterTransformAction } from '@/app/lib/actions/characters';
import styles from '@/app/styles/FormCharacter.module.css';
import BtnBackPage from '@/app/ui/BtnBackPage';
import { TriangleAlert } from 'lucide-react';
import { useActionState } from 'react';

const initialState = {
  message: null,
  errors: {},
};

export default function CharacterTransform({ character }) {
  const [state, formAction] = useActionState(
    addCharacterTransformAction,
    initialState,
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <BtnBackPage />
        <h2>Adicionando transformação</h2>
        <form action={formAction}>
          <input
            type='hidden'
            name='idCharacter'
            id='idCharacter'
            value={character.id}
          />
          <div className={styles.formInput}>
            <label htmlFor='nome'>Nome</label>
            <input type='text' name='nome' id='nome' placeholder='Goku SSJ1' />
            {state.errors?.nome && (
              <div className={styles.errorMsg}>
                <TriangleAlert /> {state.errors.nome[0]}
              </div>
            )}
          </div>

          <div className={styles.formInput}>
            <label htmlFor='img'>Imagem</label>
            <input
              type='url'
              name='img'
              id='img'
              placeholder='Insira o link (HTTP) da imagem'
            />
            {state.errors?.img && (
              <div className={styles.errorMsg}>
                <TriangleAlert /> {state.errors.img[0]}
              </div>
            )}
          </div>

          <button type='submit'>Editar</button>
        </form>
      </div>
    </section>
  );
}
