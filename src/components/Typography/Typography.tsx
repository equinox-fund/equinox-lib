import styles from './styles'
import classnames from 'classnames'
import React from 'react'

export interface TypographyProps {
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'medium' | 'semibold'
  className?: string
  caption?: boolean
  color?:
    | 'muted'
    | 'dark'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
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
      className="text-3xl font-bold underline"
      // className={classnames('text-3xl font-bold underline', className, {
      //   ['hover-as-link']: hoverAsLink
      // })}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export default Typography
