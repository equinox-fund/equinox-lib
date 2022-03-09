import styles from './styles'

interface DividerProps {
  className?: string
  horizontal?: boolean
}

const Divider: React.FC<DividerProps> = ({ className, horizontal }) => {
  return <div css={styles({ horizontal })} className={className} />
}

export default Divider
