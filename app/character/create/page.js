'use client';

import styles from '@/app/styles/FormCharacter.module.css';
import BtnBackPage from '@/app/ui/BtnBackPage';
import { createNewCharacterAction } from '@/app/lib/actions/characters';
import { IMaskInput } from 'react-imask';
import { useActionState } from 'react';
import { TriangleAlert } from 'lucide-react';

const initialState = {
  message: null,
  errors: {},
};

export default function CreateCharacter() {
  const [state, formAction] = useActionState(
    createNewCharacterAction,
    initialState,
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <BtnBackPage />
        <h2>Adicionando Personagem</h2>
        <form action={formAction}>
          <div className={styles.formInput}>
            <label htmlFor='nome'>Nome</label>
            <input
              type='text'
              name='nome'
              id='nome'
              placeholder='Insira o nome do personagem'
            />
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

          <div className={styles.formInput}>
            <label htmlFor='raca'>Raça</label>
            <select name='raca' id='raca'>
              <option value='Humano'>Humano</option>
              <option value='Android'>Android</option>
              <option value='Majin'>Majin</option>
              <option value='Namekuseijin'>Namekuseijin</option>
              <option value='Arcosiano'>Arcosiano (Raça de Freeza)</option>
              <option value='Saiyajin'>Saiyajin</option>
              <option value='Cerealiano'>Cerealiano</option>
              <option value='Kaioshin'>Kaioshin</option>
              <option value='Demônio'>Demônio</option>
              <option value='Yardrat'>Yardrat</option>
              <option value='Hakaishin'>Hakaishin (Deus da Destruição)</option>
              <option value='Tenshi'>Tenshi (Anjo)</option>
              <option value='Divindade'>Divindade Única</option>
            </select>
          </div>

          <div className={styles.formInput}>
            <label htmlFor='planeta'>Origem</label>
            <select name='planeta' id='planeta'>
              <option value='Terra'>Planeta Terra</option>
              <option value='Namekusei'>Planeta Namekusei</option>
              <option value='Vegeta'>Planeta Vegeta</option>
              <option value='Sadala'>Planeta Sadala</option>
              <option value='Arcos'>Planeta Arcos</option>
              <option value='Kaioh'>Planeta Kaioh</option>
              <option value='Kaioshin'>Planeta Kaioshin</option>
              <option value='Hakaishin'>Planeta Hakaishin</option>
              <option value='Yardrat'>Planeta Yardrat</option>
              <option value='Novo Namek'>Planeta Novo Namek</option>
              <option value='Cereal'>Planeta Cereal</option>
              <option value='Mundo dos Demônios'>Mundo dos Demônios</option>
              <option value='Reino de Zeno'>Reino de Zeno</option>
            </select>
          </div>

          <div className={styles.formInput}>
            <label htmlFor='genero'>Gênero</label>
            <select name='genero' id='genero'>
              <option value='Homem'>Homem</option>
              <option value='Mulher'>Mulher</option>
              <option value='Outros'>Outros</option>
            </select>
          </div>

          <div className={styles.containerSplit}>
            <label htmlFor='ki'>Base KI</label>
            <div className={styles.formInputAlt}>
              <IMaskInput
                type='text'
                name='ki'
                id='ki'
                placeholder='Insira o valor do KI base'
                mask={/^[0-9]*$/}
              />

              <select name='baseElevatedBy'>
                <option value=' '>Unidade</option>
                <option value='mil'>Mil</option>
                <option value='milhão'>Milhão</option>
                <option value='bilhão'>Bilhão</option>
                <option value='trilhão'>Trilhão</option>
                <option value='quadrilhão'>Quadrilhão</option>
                <option value='quintilhão'>Quintilhão</option>
                <option value='sextilhão'>Sextilhão</option>
                <option value='septilhão'>Septilhão</option>
                <option value='octilhão'>Octilhão</option>
                <option value='nonilhão'>Nonilhão</option>
                <option value='decilhão'>Decilhão</option>
              </select>
            </div>
            {state.errors?.ki && (
              <div className={styles.errorMsg}>
                <TriangleAlert /> {state.errors.ki[0]}
              </div>
            )}
          </div>

          <div className={styles.containerSplit}>
            <label htmlFor='maxKi'>Total KI</label>
            <div className={styles.formInputAlt}>
              <IMaskInput
                type='text'
                name='maxKi'
                id='maxKi'
                placeholder='Insira o valor do KI total'
                mask={/^[0-9]*$/}
              />

              <select name='totalElevatedBy'>
                <option value=' '>Unidade</option>
                <option value='mil'>Mil</option>
                <option value='milhão'>Milhão</option>
                <option value='bilhão'>Bilhão</option>
                <option value='trilhão'>Trilhão</option>
                <option value='quadrilhão'>Quadrilhão</option>
                <option value='quintilhão'>Quintilhão</option>
                <option value='sextilhão'>Sextilhão</option>
                <option value='septilhão'>Septilhão</option>
                <option value='octilhão'>Octilhão</option>
                <option value='nonilhão'>Nonilhão</option>
                <option value='decilhão'>Decilhão</option>
              </select>
            </div>
            {state.errors?.maxKi && (
              <div className={styles.errorMsg}>
                <TriangleAlert /> {state.errors.maxKi[0]}
              </div>
            )}
          </div>

          <div className={styles.formInput}>
            <label htmlFor='descricao'>Descrição</label>
            <textarea
              cols='30'
              rows='8'
              name='descricao'
              id='descricao'
              placeholder='Descreva o seu personagem entre 190 a 200 caracteres'
            ></textarea>
            {state.errors?.descricao && (
              <div className={styles.errorMsg}>
                <TriangleAlert /> {state.errors.descricao[0]}
              </div>
            )}
          </div>

          <button type='submit'>Adicionar</button>
        </form>
      </div>
    </section>
  );
}
