import classnames from 'classnames'
import { FC } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Select from 'react-select'
import Typography from '../../common/Typography'
import styles, { selectStyles } from './styles'

export interface OptionType {
  value: string
  label: string
}

export interface MultiSelectProps {
  options: OptionType[]
  label?: string
  helper?: string
  placeholder?: string
  error?: string
  value?: string[]
  className?: string
  onChange?(
    value: {
      value: string
      label: string
    }[]
  ): void
}

const MultiSelect: FC<MultiSelectProps> = ({
  label,
  error,
  options,
  placeholder,
  helper,
  className,
  onChange,
  value
}) => {
  const defaultValue = value ? options.filter((option) => value.includes(option.value)) : []
  
  return (
    <div css={styles}>
      {label && (
        <label>
          <Typography className="mb-2" size="small">
            {label}
          </Typography>
        </label>
      )}

      <div className="relative">
        <Select
          options={options}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={classnames({ ['error']: error }, className)}
          onChange={onChange}
          styles={selectStyles({ error })}
          isMulti
        />
        <BsChevronDown className="chevron" />
      </div>
      {(error || helper) && (
        <div className="helper">
          {error && (
            <Typography color="error" size="medium" caption>
              {error}
            </Typography>
          )}
          {helper && !error && (
            <Typography color="muted" size="medium" caption>
              {helper}
            </Typography>
          )}
        </div>
      )}
    </div>
  )
}

export default MultiSelect
