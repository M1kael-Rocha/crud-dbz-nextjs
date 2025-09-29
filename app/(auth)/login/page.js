'use client';
import styles from '@/app/styles/FormAuth.module.css';
import z from 'zod';
import { toast } from 'react-hot-toast';
import { validateLogin } from '@/app/lib/credentials';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const LoginSchema = z.object({
  email: z.email('Email com formato incorreto').trim(),
  password: z
    .string({
      message: 'Insira uma senha',
    })
    .trim(),
});

export default function Login() {
  async function loginAction(formData) {
    const loginData = {
      email: formData.get('email'),
      password: formData.get('senha'),
    };

    const result = LoginSchema.safeParse(loginData);

    if (!result.success) {
      let errorMsg = '';
      result.error.issues.forEach(issue => {
        errorMsg = errorMsg + issue.message + '. ';
      });
      toast.error(errorMsg);
      return;
    }

    const res = await validateLogin(loginData);
    if (res.error) {
      toast.error(res.error);
      return;
    } else {
      toast.success(res.success);
      redirect('/dashboard');
    }
  }

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-box']}>
        <h2>Iniciar sessão</h2>
        <form action={loginAction}>
          <div className={styles['form-input']}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Insira seu email'
            />
          </div>

          <div className={styles['form-input']}>
            <label htmlFor='senha'>Senha</label>
            <input
              type='password'
              name='senha'
              id='senha'
              placeholder='Insira sua senha'
            />
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
