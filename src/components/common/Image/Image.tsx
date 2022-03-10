import { useState, useEffect, useRef } from 'react'
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
  const [loading, setLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const handleImageLoaded = () => {
    setTimeout(() => setLoading(false), 50)
    if (onLoad) onLoad()
  }

  useEffect(function () {
    if (imgRef.current?.complete) {
      setTimeout(function () {
        return setLoading(false)
      }, 50)
    }
  }, [])

  return (
    <div className={className}>
      <div css={styles({ loading, showPreloader })}>
        <img src={src} alt={alt} onLoad={handleImageLoaded} ref={imgRef} />
      </div>
    </div>
  )
}

export default Image
