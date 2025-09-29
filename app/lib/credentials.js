'use server';

import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { readDb, writeDb } from './connection-db';
import { createSession } from './session';

const file = 'login-db.json';

export async function createUser(data) {
  const { nome, email, password } = data;

  const passwordCrypt = await bcrypt.hash(password, 10);

  const newUser = {
    id: crypto.randomUUID(),
    nome,
    email,
    password: passwordCrypt,
    imgProfile:
      'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png',
  };

  const users = await readDb(file);

  for (const user of users) {
    if (user.email === email) {
      return { error: 'Usuário já cadastrado com este email' };
    }
  }

  users.push(newUser);
  await writeDb(users, file);
  return { success: 'Usuário criado com sucesso!' };
}

export async function validateLogin(data) {
  const { email, password } = data;

  const users = await readDb(file);

  const user = users.find(user => user.email === email);
  if (!user) return { error: 'Usuário não cadastrado' };

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    await createSession(user.id, user.nome, user.email);
    return { success: 'Login bem sucedido!' };
  } else {
    return { error: 'Senha incorreta' };
  }
}

export async function getUserById(userId) {
  const users = await readDb(file);
  const user = users.find(u => u.id === userId);
  return user;
}
