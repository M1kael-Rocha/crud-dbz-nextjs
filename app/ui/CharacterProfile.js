'use client';

import styles from '@/app/styles/CharacterProfile.module.css';
import TransformationCard from '@/app/ui/TransformationCard';
import Image from 'next/image';

export default function DetailsCharacter({ characterInfo }) {
  const CharacterTransformations = characterInfo.transformations;

  const tfs = CharacterTransformations.map(t => (
    <TransformationCard {...t} key={t.id} />
  ));

  return (
    <>
      <div className={styles['character-container']}>
        <div className={styles['character-card']}>
          <div className={styles['title-1']}>
            <h2>Detalhes do personagem</h2>
          </div>
          <div className={styles['character-content']}>
            <div className={styles['character-img-container']}>
              <Image
                src={characterInfo.img}
                className={styles['character-img']}
                fill={true}
                alt={`Imagem do personagem ${characterInfo.nome}`}
              />
            </div>
            <div className={styles['character-info']}>
              <h3>Informações</h3>
              <div className={styles['details-infoGroup']}>
                <div className={styles['details-infoItem']}>
                  <span>Raça: </span>
                  <p>{characterInfo.raca}</p>
                </div>

                <div className={styles['details-infoItem']}>
                  <span>Planeta: </span>
                  <p>{characterInfo.planeta}</p>
                </div>

                <div className={styles['details-infoItem']}>
                  <span>Gênero: </span>
                  <p>{characterInfo.genero}</p>
                </div>
              </div>

              <div className={styles['details-infoGroup']}>
                <div className={styles['details-infoItem']}>
                  <span>Base KI: </span>
                  <p>{`${characterInfo.ki} ${characterInfo.baseElevatedBy}`}</p>
                </div>

                <div className={styles['details-infoItem']}>
                  <span>Total KI: </span>
                  <p>{`${characterInfo.maxKi} ${characterInfo.totalElevatedBy}`}</p>
                </div>
              </div>
              <h3>Descrição</h3>
              <div className={styles['details-infoGroup']}>
                <div className={styles['details-infoDescription']}>
                  <p>{characterInfo.descricao}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['character-card']}>
          <div className={styles['title-2']}>
            <h2>Transformações</h2>
          </div>
          <div className={styles['transform-content']}>
            {CharacterTransformations.length > 0 ? (
              <>{tfs}</>
            ) : (
              <div className={styles['alert-container']}>
                <p>
                  Este personagem não possui tranformações ou não foram
                  adicionadas!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={styles['character-card']}></div>
      </div>
    </>
  );
}
