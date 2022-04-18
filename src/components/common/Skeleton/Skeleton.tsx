import { CSSProperties } from 'react'
import styles from './styles'

interface SkeletonProps {
  className?: string
  style?: CSSProperties | undefined
  tag?: 'div' | 'span'
}

const Skeleton: React.FC<SkeletonProps> = ({ className, style, tag = 'div' }) => {
  const Tag = tag
  return <Tag css={styles} className={className} style={style} data-testid="skeleton" />
}

export default Skeleton
