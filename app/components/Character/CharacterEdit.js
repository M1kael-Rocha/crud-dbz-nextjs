'use client';

import styles from '@/app/styles/FormCharacter.module.css';
import { useState, useActionState } from 'react';
import { IMaskInput } from 'react-imask';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { editCharacterAction } from '@/app/lib/actions/characters';

const initialState = {
  message: null,
  errors: {},
};

export default function FormToEdit({ characterToEdit }) {
  const [imageUrl, setImageUrl] = useState(characterToEdit.img);

  const handleUrlChange = e => {
    setImageUrl(e.target.value);
  };

  const [state, formAction] = useActionState(editCharacterAction, initialState);

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-box']}>
        <div className={styles['btn-container']}>
          <Link href={'/dashboard'}>
            <ArrowLeft />
          </Link>
        </div>
        <h2>{characterToEdit.nome}</h2>
        <div className={styles['img-container']}>
          <Image
            src={imageUrl}
            className={styles['img-character']}
            fill={true}
            alt={`Imagem do personagem ${characterToEdit.nome}`}
          />
        </div>
        <form action={formAction}>
          <input
            type='hidden'
            name='idCharacter'
            id='idCharacter'
            value={characterToEdit.id}
          />
          <div className={styles['form-input']}>
            <label htmlFor='nome'>Nome</label>
            <input
              type='text'
              name='nome'
              id='nome'
              placeholder='Insira o nome do personagem'
              defaultValue={characterToEdit.nome}
            />
            {state.errors?.nome && (
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.nome[0]}
              </div>
            )}
          </div>

          <div className={styles['form-input']}>
            <label htmlFor='img'>Imagem</label>
            <input
              type='url'
              name='img'
              id='img'
              placeholder='Insira o link (HTTP) da imagem'
              value={imageUrl}
              onChange={handleUrlChange}
            />
            {state.errors?.img && (
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.img[0]}
              </div>
            )}
          </div>

          <div className={styles['form-input']}>
            <label htmlFor='raca'>Raça</label>
            <select name='raca' id='raca' defaultValue={characterToEdit.raca}>
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

          <div className={styles['form-input']}>
            <label htmlFor='planeta'>Origem</label>
            <select
              name='planeta'
              id='planeta'
              defaultValue={characterToEdit.planeta}
            >
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

          <div className={styles['form-input']}>
            <label htmlFor='genero'>Gênero</label>
            <select
              name='genero'
              id='genero'
              defaultValue={characterToEdit.genero}
            >
              <option value='Homem'>Homem</option>
              <option value='Mulher'>Mulher</option>
              <option value='Outros'>Outros</option>
            </select>
          </div>

          <div className={styles['form-two-columns-container']}>
            <label htmlFor='ki'>Base KI</label>
            <div className={styles['form-input-column']}>
              <IMaskInput
                type='text'
                name='ki'
                id='ki'
                placeholder='Insira o valor do KI base'
                mask={/^[0-9]*$/}
                defaultValue={characterToEdit.ki}
              />

              <select
                name='baseElevatedBy'
                defaultValue={characterToEdit.baseElevatedBy}
              >
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
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.ki[0]}
              </div>
            )}
          </div>

          <div className={styles['form-two-columns-container']}>
            <label htmlFor='maxKi'>Total KI</label>
            <div className={styles['form-input-column']}>
              <IMaskInput
                type='text'
                name='maxKi'
                id='maxKi'
                placeholder='Insira o valor do KI total'
                mask={/^[0-9]*$/}
                defaultValue={characterToEdit.maxKi}
              />

              <select
                name='totalElevatedBy'
                defaultValue={characterToEdit.totalElevatedBy}
              >
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
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.maxKi[0]}
              </div>
            )}
          </div>

          <div className={styles['form-input']}>
            <label htmlFor='descricao'>Descrição</label>
            <textarea
              cols='30'
              rows='10'
              name='descricao'
              id='descricao'
              defaultValue={characterToEdit.descricao}
            ></textarea>
            {state.errors?.descricao && (
              <div className={styles['error-msg']}>
                <TriangleAlert /> {state.errors.descricao[0]}
              </div>
            )}
          </div>

          <button type='submit'>Editar</button>
        </form>
      </div>
    </div>
  );
}
