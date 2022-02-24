import Spinner from 'components/Spinner'
import classnames from 'classnames'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import Icon, { TIconColor } from '../Icon'
import Popper, { PopperProps } from '../Popper'
import styles from './styles'

export interface ButtonProps {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large' | 'x-large'
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined' | 'text'
  iconPosition?: 'left' | 'right'
  className?: string
  onClick?: (event: any) => void
  loading?: boolean
  disabled?: boolean
  submit?: boolean
  tooltip?: string
  TooltipProps?: PopperProps
  icon?: IconType
  IconProps?: { color?: TIconColor; className?: string }
}

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  color = 'primary',
  variant = 'outlined',
  iconPosition = 'right',
  icon,
  children,
  className,
  onClick,
  loading,
  disabled,
  tooltip,
  TooltipProps,
  IconProps = {},
  submit = false,
  ...restProps
}) => {
  const isDisabled = loading || disabled

  const cssProps = {
    isDisabled,
    size,
    color,
    variant
  }

  const btnAttrs = {
    role: 'button',
    css: styles(cssProps),
    className,
    disabled: isDisabled,
    ...restProps
  }

  return (
    <WithTooltip tooltip={tooltip} TooltipProps={TooltipProps}>
      <button
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
        {...btnAttrs}
      >
        {icon && iconPosition === 'left' && (
          <Icon
            svg={icon}
            {...IconProps}
            className={classnames(IconProps?.className, 'icon-left')}
          />
        )}
        {children}
        {loading ? (
          <Spinner className="spinner" />
        ) : (
          icon &&
          iconPosition === 'right' && (
            <Icon
              svg={icon}
              {...IconProps}
              className={classnames(IconProps?.className, 'icon-right')}
            />
          )
        )}
      </button>
    </WithTooltip>
  )
}

interface WithTooltip {
  tooltip?: string
  TooltipProps?: PopperProps
  children?: ReactNode
}

const WithTooltip = ({ tooltip, TooltipProps, children }: WithTooltip) => {
  const popperProps = TooltipProps || {
    tooltipContainerRef: null
  }
  if (tooltip) {
    return (
      <Popper tooltip={tooltip} {...popperProps}>
        {children}
      </Popper>
    )
  }

  return <>{children}</>
}

export default Button
