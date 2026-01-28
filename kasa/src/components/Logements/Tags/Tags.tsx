/**
 * Tags.tsx
 * Ce fichier conteint le code du composant affichant les Tags pour chaque logements
 */

import styles from './tags.module.scss'

interface TagsProps {
  tags: string[]
}

export function Tags({ tags }: TagsProps) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <p key={tag} className={styles.tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}
