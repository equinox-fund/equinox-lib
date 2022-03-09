import classnames from 'classnames'
import React from 'react'
import Checkbox, { CheckboxProps } from '../Checkbox'
import Typography from '../Typography'
import styles from './styles'

export interface SelectOptionsProps extends CheckboxProps {
  options: Array<{ label: string; value: string | number }>
  optionsAlign?: 'row' | 'col'
  onChange?(event: React.FormEvent<HTMLInputElement>): void
  value?: string
  label?: string
  error?: string
}

const SelectOptions: React.FC<SelectOptionsProps> = (props) => {
  const {
    options,
    optionsAlign = 'row',
    value,
    onChange,
    label,
    error,
    ...restProps
  } = props

  const elements = options.map((props) => {
    return (
      <div key={props.value}>
        <Checkbox
          {...props}
          {...restProps}
          checked={value === props.value}
          onChange={onChange}
        />
      </div>
    )
  })

  return (
    <div css={styles()}>
      {label && (
        <Typography className="label" color="secondary">
          {label}
        </Typography>
      )}
      <div className={classnames('options', optionsAlign)}>{elements}</div>
      {error && (
        <Typography className="label-error" color="error" size="medium" caption>
          {error}
        </Typography>
      )}
    </div>
  )
}

export default SelectOptions
