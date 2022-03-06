import styles from './styles'
import classnames from 'classnames'
import React from 'react'
import { Color, Size, FontWeight } from '../../types/theme'

export interface TypographyProps {
  size?: Size
  weight?: FontWeight
  className?: string
  caption?: boolean
  color?: Color
  uppercase?: boolean
  tag?: 'p' | 'span'
  ellipsis?: boolean
  hoverAsLink?: boolean
  lineBreaks?: boolean
}

const Typography: React.FC<TypographyProps> = ({
  size = 'medium',
  weight = 'normal',
  children,
  className,
  caption = false,
  ellipsis = false,
  color = 'secondary',
  uppercase = false,
  hoverAsLink = false,
  lineBreaks = false,
  tag = 'p',
  ...restProps
}) => {
  const Component = tag

  return (
    <Component
      css={styles({
        size,
        weight,
        color,
        caption,
        uppercase,
        ellipsis,
        lineBreaks
      })}
      className={classnames(className, {
        ['hover-as-link']: hoverAsLink
      })}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export default Typography
