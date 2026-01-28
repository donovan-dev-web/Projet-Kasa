/**
 * Profils.tsx
 * Ce fichier contiens le code du composant profils pour afficher limage et le nom du profils proprietaire du logements
 * ce composant est present dans la page dynamqiue logements
 */

import style from './profil.module.scss'

interface ProfilsProps {
  name: string
  imgUrl: string
}

export function Profil({ name, imgUrl }: ProfilsProps) {
  return (
    <>
      <div className={style.profilsContainer}>
        <p className={style.name}>{name}</p>
        <img
          className={style.profilPicture}
          src={imgUrl}
          alt={`Photo du profil de ${name}`}
        />
      </div>
    </>
  )
}
