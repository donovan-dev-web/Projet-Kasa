/**
 * Carrousel.tsx
 * Ce fichier contient lensemble du code lier au Carrousel d'image presents dans les page logements
 */

import { useState, useRef } from 'react'
import style from './carrousel.module.scss'
import ArrowControl from '@/assets/Icons/CarrouselArrow.png'

interface CarrouselProps {
  pictures: string[]
}

export function Carrousel({ pictures }: CarrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const total = pictures.length
  const hasMultipleImages = total > 1

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  function next() {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  function prev() {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX
  }

  function handleTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) return

    const distance = touchStartX.current - touchEndX.current

    if (distance > 50) {
      next()
    } else if (distance < -50) {
      prev()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div
      className={style.CarrouselContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className={style.image}
      />

      {hasMultipleImages && (
        <>
          <button
            type="button"
            className={`${style.control} ${style.prev}`}
            onClick={prev}
            aria-label="Image précédente"
          >
            <img src={ArrowControl} alt="" />
          </button>

          <button
            type="button"
            className={`${style.control} ${style.next}`}
            onClick={next}
            aria-label="Image suivante"
          >
            <img src={ArrowControl} alt="" />
          </button>

          <div className={style.Compteur}>
            {currentIndex + 1} / {total}
          </div>
        </>
      )}
    </div>
  )
}
