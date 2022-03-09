import Typography, { TypographyProps } from '../../common/Typography'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { GoCheck } from 'react-icons/go'
import styles from './styles'

export interface CheckboxProps {
  label?: string | ReactNode
  error?: string
  TypographyProps?: TypographyProps
  size?: 'small' | 'large'
  align?: 'center' | 'start'
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  checked?: boolean
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  error,
  TypographyProps,
  size = 'large',
  align,
  checked,
  ...props
}) => {
  return (
    <div css={styles({ size, align })} className="relative">
      <label className="form-checkbox">
        <div>
          <div className="form-checkbox-control">
            <input
              type="checkbox"
              className="form-checkbox-input"
              checked={checked}
              {...props}
            />
            <div className="form-checkbox-pseudo-input">
              <div className="form-checkbox-checkmark">
                <GoCheck
                  className={classNames({
                    ['h-3']: size === 'small',
                    ['w-4']: size !== 'small'
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        {label && (
          <div>
            <Typography
              size="small"
              className="form-checkbox-label"
              color="secondary"
              {...TypographyProps}
            >
              {label}
            </Typography>
          </div>
        )}
      </label>
      {error && (
        <Typography color="error" size="medium" caption>
          {error}
        </Typography>
      )}
    </div>
  )
}
export default Checkbox
