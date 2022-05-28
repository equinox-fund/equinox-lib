import styles from './styles'
import classnames from 'classnames'
import React, { ReactNode } from 'react'
import {
  TypographyColor,
  TypographySize,
  TypographyFontWeight
} from './Typography.types'

export interface TypographyProps {
  size?: TypographySize
  weight?: TypographyFontWeight
  className?: string
  caption?: boolean
  children?: ReactNode
  color?: TypographyColor
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
