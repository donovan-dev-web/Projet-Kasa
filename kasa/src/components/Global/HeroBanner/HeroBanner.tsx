import style from './heroBanner.module.scss'

interface HeroBannerProps {
  image: string
  imgTextAlt: string
  title?: string
}

export function HeroBanner({ image, imgTextAlt, title }: HeroBannerProps) {
  return (
    <div className={style.banner}>
      <img src={image} alt={imgTextAlt} className={style.image} />

      <div
        className={`${style.overlay} ${
          title ? style.overlayWithTitle : style.overlayNoTitle
        }`}
      />

      {title && <h1 className={style.title}>{title}</h1>}
    </div>
  )
}
