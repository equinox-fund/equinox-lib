import React from 'react'
import styles from './styles'
import {
  HeadingColor,
  HeadingSize,
  HeadingFontWeight
} from './Heading.types'

export interface HeadingProps {
  size?: HeadingSize
  weight?: HeadingFontWeight
  color?: HeadingColor
  className?: string
  uppercase?: boolean
  link?: boolean
  active?: boolean
}

const Heading: React.FC<HeadingProps> = ({
  size = 'large',
  weight = 'semibold',
  color = 'primary',
  className,
  uppercase = false,
  link = false,
  active = false,
  children,
  ...restProps
}) => {
  const Component = size === 'large' ? 'h1' : 'h2'

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

export default Heading
