'use server';

import { redirect } from 'next/navigation';
import { LoginSchema } from '@/app/lib/schemas';
import { validateLogin, createUser } from '@/app/lib/credentials';

export async function loginAction(prevState, formData) {
  const inpFormData = Object.fromEntries(formData.entries());

  const validateFields = LoginSchema.safeParse(inpFormData);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os campos.',
    };
  }

  await validateLogin(validateFields.data);
  redirect('/dashboard');
}

export async function registerAction(prevState, formData) {
  const inpFormData = Object.fromEntries(formData.entries());

  const validateFields = LoginSchema.safeParse(inpFormData);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os campos.',
    };
  }

  await createUser(validateFields.data);
  redirect('/dashboard');
}
