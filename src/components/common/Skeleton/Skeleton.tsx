import styles from './styles'

interface SkeletonProps {
  className?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return <div css={styles} className={className} data-testid="skeleton" />
}

export default Skeleton
