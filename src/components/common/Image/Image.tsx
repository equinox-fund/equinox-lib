import { useRef } from 'react'
import styles from './styles'

export interface ImageProps {
  src: string
  alt: string
  className?: string
  onLoad?: () => void
  showPreloader?: boolean
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  onLoad,
  className,
  showPreloader = true
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleImageLoaded = () => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.querySelector('.loading')?.classList.remove('loading')
      }
    }, 50)
    if (onLoad) onLoad()
  }

  return (
    <div className={className} ref={ref}>
      <div css={styles({ showPreloader })} className="loading">
        <img src={src} alt={alt} onLoad={handleImageLoaded} />
      </div>
    </div>
  )
}

export default Image
