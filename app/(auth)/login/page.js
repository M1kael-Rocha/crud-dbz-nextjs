'use client';
import styles from '@/app/styles/FormAuth.module.css';
import { loginAction } from '@/app/lib/actions/auth';
import Link from 'next/link';
import { useActionState } from 'react';
import { TriangleAlert } from 'lucide-react';

const initialState = {
  message: null,
  errors: {},
};

export default function Login() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-box']}>
        <h2>Iniciar sessão</h2>
        <form action={formAction}>
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
            <label htmlFor='password'>Senha</label>
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

          <button type='submit'>Entrar</button>
          <div className={styles['create-account-row']}>
            Não tem conta? Clique <Link href={'/create'}>aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
