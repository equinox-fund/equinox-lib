import styles from './styles'

export interface ProjectBadgeProps {
  size?: 'small' | 'medium'
  color?: 'primary' | 'secondary' | 'success'
  className?: string
}

const ProjectBadge: React.FC<ProjectBadgeProps> = ({
  size = 'medium',
  color = 'success',
  className,
  children
}) => (
  <div css={styles({ size, color })} className={className}>
    {children}
  </div>
)

export default ProjectBadge
