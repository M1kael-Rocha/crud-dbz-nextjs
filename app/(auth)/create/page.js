'use client';

import { registerAction } from '@/app/lib/actions/auth';
import styles from '@/app/styles/FormAuth.module.css';
import BtnBackPage from '@/app/ui/BtnBackPage';
import { TriangleAlert } from 'lucide-react';
import { useActionState } from 'react';

const initialState = {
  message: null,
  errors: {},
};

export default function CreateUser() {
  const [state, formAction] = useActionState(registerAction, initialState);

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-box']}>
        <BtnBackPage />
        <h2>Criar conta</h2>
        <form action={formAction}>
          <div className={styles['form-input']}>
            <label htmlFor='nome'>Nome</label>
            <input
              type='text'
              name='nome'
              id='nome'
              placeholder='Insira seu nome ou nickname'
            />
            {state.errors?.nome && (
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.nome[0]}
              </div>
            )}
          </div>

          <div className={styles['form-input']}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Insira seu email'
            />
            {state.errors?.email && (
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.email[0]}
              </div>
            )}
          </div>

          <div className={styles['form-input']}>
            <label htmlFor='senha'>Senha</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Insira sua senha'
            />
            {state.errors?.password && (
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.password[0]}
              </div>
            )}
          </div>

          <div className={styles['form-input']}>
            <label htmlFor='confPassword'>Confirmar senha</label>
            <input
              type='password'
              name='confPassword'
              id='confPassword'
              placeholder='Confirme sua senha'
            />
            {state.errors?.confPassword && (
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.confPassword[0]}
              </div>
            )}
          </div>

          <button type='submit'>Cadastrar-se</button>
        </form>
      </div>
    </div>
  );
}
