import Spinner from '../Spinner'
import styles from './styles'

export interface CardProps {
  className?: string
  loading?: boolean
  padding?: boolean
  hoverAsLink?: boolean
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  padding = true,
  loading,
  hoverAsLink = false
}) => {
  return (
    <div css={styles({ loading, padding, hoverAsLink })} className={className}>
      {loading && (
        <div className="loading-view" data-testid="loading-view">
          <Spinner size="medium" />
        </div>
      )}
      {!loading && children}
    </div>
  )
}

export default Card
