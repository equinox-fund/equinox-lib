import { ReactNode } from 'react'
import Typography, { TypographyProps } from '../Typography/Typography'
import classnames from 'classnames'
import styles from './styles'

export interface TypographyWithLabelProps {
  label: string
  children: ReactNode | string
  TypographyProps?: TypographyProps | boolean
  TypographyLabelProps?: TypographyProps
  direction?: 'row' | 'column'
  reversed?: boolean
  className?: string
}

const TypographyWithLabel: React.FC<TypographyWithLabelProps> = ({
  label,
  children,
  TypographyProps,
  TypographyLabelProps,
  direction = 'row',
  reversed = false,
  className
}) => {
  const valueClassname = classnames({ 'text-right': direction === 'row' })

  const labelClassname = classnames(TypographyLabelProps?.className, {
    'mb-0.5': direction === 'column' && !reversed
  })

  return (
    <div className={className} css={styles({ direction, reversed })}>
      <div data-testid="label">
        <Typography
          color="muted"
          {...TypographyLabelProps}
          className={labelClassname}
        >
          {label}
        </Typography>
      </div>
      <div className={valueClassname} data-testid="text">
        {TypographyProps && (
          <Typography {...TypographyProps}>{children}</Typography>
        )}
        {!TypographyProps && children}
      </div>
    </div>
  )
}

export default TypographyWithLabel
