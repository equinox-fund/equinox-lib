import classnames from 'classnames'
import React, { FC, ReactNode } from 'react'
import Typography from '../../common/Typography'
import styles from './styles'

export interface TextFieldProps {
  label?: string
  helper?: string
  type?: 'text' | 'password' | 'email'
  size?: 'small' | 'medium'
  error?: string
  placeholder?: string
  icon?: ReactNode
  className?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  [t: string]: any
  borders?: boolean
}

const TextField: FC<TextFieldProps> = ({
  label,
  error,
  placeholder,
  icon,
  helper,
  type = 'text',
  size = 'small',
  borders = true,
  ...props
}) => {
  const inputAttrs = {
    type,
    placeholder,
    className: classnames({ ['error']: error }),
    ...props
  }

  return (
    <div css={styles({ size, borders })}>
      {label && (
        <div className="mb-1.5">
          <Typography color="muted" size="large" caption>
            {label}
          </Typography>
        </div>
      )}

      <div className="input-wrapper">
        <input {...inputAttrs} />
        {icon && <span className="icon">{icon}</span>}
      </div>

      <div className="helper">
        {error && (
          <Typography color="error" size="medium" caption>
            {error}
          </Typography>
        )}
        {helper && !error && (
          <Typography color="muted" size="medium" caption lineBreaks>
            {helper}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default TextField
