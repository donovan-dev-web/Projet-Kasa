import style from './carrousel.module.scss'

interface CarrouselProps {
  imgRef: string
}

export function Carrousel({ imgRef }: CarrouselProps) {
  return (
    <>
      <div className={style.CarrouselContainer}>
        <img className={style.placeholder} src={imgRef} alt="Tmp Image" />
      </div>
    </>
  )
}
