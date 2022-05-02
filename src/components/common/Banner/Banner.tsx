import Typography, { TypographyProps } from '../Typography'
import React, { ReactNode } from 'react'
import styles from './styles'

export interface BannerProps {
  text?: string
  cta?: ReactNode
  color?: 'highlight' | 'muted'
  align?: 'left' | 'center'
  className?: string
  TypographyProps?: TypographyProps | boolean
  onClose?: () => void
}

const Banner: React.FC<BannerProps> = ({
  text,
  cta,
  color = 'highlight',
  align = 'center',
  className,
  TypographyProps,
  children
}) => {
  return (
    <div css={styles({ color, align })} className={className}>
      <div className="banner-inner">
        {text ? (
          <Typography className="text" {...TypographyProps}>
            {text}
          </Typography>
        ) : (
          children
        )}
        <div className="flex-shrink-0 inline-block">{cta}</div>
      </div>
    </div>
  )
}

export default Banner
