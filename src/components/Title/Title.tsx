import React from 'react'
import styles from './styles'
import {
  TitleColor,
  TitleSize,
  TitleFontWeight
} from './Title.types'

export interface TitleProps {
  size?: TitleSize
  weight?: TitleFontWeight
  color?: TitleColor
  className?: string
  uppercase?: boolean
  link?: boolean
  active?: boolean
}

const Title: React.FC<TitleProps> = ({
  size = 'medium',
  weight = 'semibold',
  color = 'secondary',
  className,
  uppercase = false,
  link = false,
  active = false,
  children,
  ...restProps
}) => {
  let tag = size === 'x-large' ? 'h1' : 'h2'
  if (size === 'medium') tag = 'h3'
  if (size === 'small') tag = 'h4'

  const Component = tag as keyof JSX.IntrinsicElements

  const styleProps = {
    size,
    weight,
    color,
    uppercase,
    link,
    active
  }

  return (
    <Component css={styles(styleProps)} className={className} {...restProps}>
      {children}
    </Component>
  )
}

export default Title
