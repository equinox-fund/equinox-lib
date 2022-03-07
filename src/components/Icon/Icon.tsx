import React from 'react'
import { IconType } from 'react-icons'
import styles from './styles'

export type TIconColor =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'muted'
  | 'success'
  | 'error'
  | 'info'

export interface IconProps {
  svg: IconType
  className?: string
  color?: TIconColor
}

const Icon: React.FC<IconProps> = ({ svg, className, color = 'secondary' }) => {
  const IconComponent = svg

  return <IconComponent css={styles({ color })} className={className} />
}

export default Icon
