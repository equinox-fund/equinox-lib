import classnames from 'classnames'
import { FC } from 'react'
import Typography from '../../common/Typography'
import styles from './styles'

export interface DateFieldProps {
  name: string
  label?: string
  helper?: string
  size?: 'small' | 'medium'
  error?: string
  placeholder?: string
  className?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  [t: string]: any
  borders?: boolean
}

const DateField: FC<DateFieldProps> = ({
  name,
  label,
  value,
  error,
  placeholder,
  icon,
  helper,
  size = 'small',
  borders = true,
  onChange
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  const handleFocus = (e) => {
    e.target.type = 'date'
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
        <input
          name={name}
          type={value ? 'date' : 'text'}
          defaultValue={value}
          onFocus={handleFocus}
          className={classnames({ ['error']: error })}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />
        {icon && <span className="icon">{icon}</span>}
      </div>

      <div className="helper">
        {error && (
          <Typography color="error" size="large" caption>
            {error}
          </Typography>
        )}
        {helper && !error && (
          <Typography color="muted" size="large" caption lineBreaks>
            {helper}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default DateField
