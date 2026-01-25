/**
 * Accordion.tsx
 * Accordéon animé + accessible (version correcte React)
 */

import { useRef, useState, useEffect } from 'react'
import style from './accordion.module.scss'
import arrowIcon from '@/assets/Icons/arrow_icons.webp'

interface AccordionProps {
  title: string
  content: string | string[]
}

export function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  const safeId = `accordion-${title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')}`

  useEffect(() => {
    if (!contentRef.current) return

    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setHeight('0px')
    }
  }, [isOpen])

  return (
    <div className={style.accordionItem}>
      <button
        className={style.accordionHeader}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={safeId}
        type="button"
      >
        <span>{title}</span>
        <span
          className={`${style.accordionIcon} ${isOpen ? style.open : ''}`}
          aria-hidden="true"
        >
          <img
            src={arrowIcon}
            alt="Icon d'ouverture des dropdown de l'application Kasa"
          />
        </span>
      </button>

      <div
        id={safeId}
        className={style.accordionContent}
        role="region"
        style={{ height }}
      >
        <div ref={contentRef} className={style.accordionInner}>
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  )
}
