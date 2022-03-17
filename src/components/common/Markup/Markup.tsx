import styles from './styles'

export interface MarkupProps {
  html: string
  className?: string
}

const Markup: React.FC<MarkupProps> = ({ html, className }) => {
  return (
    <div
      css={styles}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Markup
