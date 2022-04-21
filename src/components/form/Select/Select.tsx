import classnames from 'classnames'
import { FC } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Typography from '../../common/Typography'
import styles from './styles'

export interface SelectProps {
  options: Array<{ value: string | number; label: string }>
  label?: string
  helper?: string
  placeholder?: string
  error?: string
  value?: string | number
  className?: string
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void
}

const Select: FC<SelectProps> = ({
  label,
  error,
  options,
  placeholder,
  helper,
  className,
  value,
  ...props
}) => {
  return (
    <div css={styles({ value })}>
      {label && (
        <label>
          <Typography className="mb-2" size="small">
            {label}
          </Typography>
        </label>
      )}

      <div className="relative">
        <select
          {...props}
          value={value || ''}
          className={classnames({ ['error']: error }, className)}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            return (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            )
          })}
        </select>
        <BsChevronDown className="chevron" />
      </div>
      {(error || helper) && (
        <div className="helper">
          {error && (
            <Typography color="error" size="large" caption>
              {error}
            </Typography>
          )}
          {helper && !error && (
            <Typography color="muted" size="large" caption>
              {helper}
            </Typography>
          )}
        </div>
      )}
    </div>
  )
}

export default Select
