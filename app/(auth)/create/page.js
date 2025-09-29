'use client';

import z from 'zod';
import { toast } from 'react-hot-toast';
import styles from '@/app/styles/FormAuth.module.css';
import { ArrowLeft } from 'lucide-react';
import { redirect } from 'next/navigation';
import { createUser } from '@/app/lib/credentials';
import Link from 'next/link';

const CreateUserSchema = z
  .object({
    nome: z.string({ message: 'Insira um nome/nickname' }).trim(),
    email: z.email('Email com formato incorreto').trim(),
    password: z
      .string({ message: 'Insira uma senha' })
      .trim()
      .min(4, { message: 'Senha precisa de no mínimo de 4 caracteres' }),
    confPassword: z
      .string({ message: 'Insira uma confirmação de senha' })
      .trim()
      .min(1, { message: 'Confirmar senha não pode ser vazia' }),
  })
  .refine(data => data.password === data.confPassword, {
    message: 'Senhas não conferem',
    path: ['confPassword'],
  });

export default function CreateUser() {
  const createNewUser = async formData => {
    const newUser = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      password: formData.get('senha'),
      confPassword: formData.get('conf-senha'),
    };

    const filterRes = CreateUserSchema.safeParse(newUser);

    if (!filterRes.success) {
      let errorMsg = '';

      filterRes.error.issues.forEach(issue => {
        errorMsg = errorMsg + issue.message + '. \n';
      });

      toast.error(errorMsg);
      return;
    }

    const res = await createUser(newUser);
    if (res.error) {
      toast.error(res.error);
      return;
    } else {
      toast.success(res.success);
      redirect('/login');
    }
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-box']}>
        <div className={styles['btn-container']}>
          <Link href={'/login'}>
            <ArrowLeft />
          </Link>
        </div>
        <h2>Criar conta</h2>
        <form action={createNewUser}>
          <div className={styles['form-input']}>
            <label htmlFor='email'>Nome</label>
            <input
              type='text'
              name='nome'
              id='nome'
              placeholder='Insira seu nome ou nickname'
            />
          </div>

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

          <div className={styles['form-input']}>
            <label htmlFor='senha'>Confirmar senha</label>
            <input
              type='password'
              name='conf-senha'
              id='conf-senha'
              placeholder='Confirme sua senha'
            />
          </div>

          <button type='submit'>Cadastrar-se</button>
        </form>
      </div>
    </div>
  );
}
