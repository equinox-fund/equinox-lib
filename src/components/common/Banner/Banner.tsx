import Typography, { TypographyProps } from '../../typography/Typography'
import React, { ReactNode } from 'react'
import styles from './styles'

export interface BannerProps {
  text?: string
  cta?: ReactNode
  color?: 'highlight' | 'muted'
  className?: string
  TypographyProps?: TypographyProps | boolean
  onClose?: () => void
}

const Banner: React.FC<BannerProps> = ({
  text,
  cta,
  color = 'highlight',
  className,
  TypographyProps,
  children
}) => {
  return (
    <div css={styles({ color })} className={className}>
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
