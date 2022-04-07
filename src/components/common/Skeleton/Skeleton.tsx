import { CSSProperties } from 'react'
import styles from './styles'

interface SkeletonProps {
  className?: string
  style?: CSSProperties | undefined
}

const Skeleton: React.FC<SkeletonProps> = ({ className, style }) => {
  return <div css={styles} className={className} style={style} data-testid="skeleton" />
}

export default Skeleton
