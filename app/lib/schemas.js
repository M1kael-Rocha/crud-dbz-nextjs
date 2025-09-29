import z from 'zod';

export const CharacterSchema = z.object({
  nome: z.string().min(1, { message: 'Insira um nome' }).trim(),
  descricao: z
    .string()
    .trim()
    .min(100, { message: 'Mínimo de 100 caracteres' })
    .max(200, { message: 'Maximo de 200 caracteres' }),
  img: z.httpUrl({ message: 'Insira um URL válido' }).trim(),
  raca: z.string(),
  planeta: z.string(),
  genero: z.string(),
  ki: z
    .string()
    .trim()
    .min(1, { message: 'Insira um valor de KI base' })
    .max(3, { message: 'Apenas valores com até 3 dígitos' }),
  baseElevatedBy: z.string(),
  maxKi: z
    .string()
    .trim()
    .min(1, { message: 'Insira um valor de KI total' })
    .max(3, { message: 'Apenas valores com até 3 dígitos' }),
  totalElevatedBy: z.string(),
});

export const CharacterTransformSchema = z.object({
  nome: z.string().min(1, { message: 'Insira um nome' }).trim(),
  img: z.httpUrl({ message: 'Insira um URL válido' }).trim(),
});
