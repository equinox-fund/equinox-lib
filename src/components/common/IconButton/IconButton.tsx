import { ReactNode } from 'react'
import styles from './styles'
import Tooltip, { TooltipProps } from '../Tooltip'
import {
  IconButtonColor,
  IconButtonSize,
  IconButtonVariant
} from './IconButton.types'

export interface IconButtonProps {
  icon: ReactNode
  title: string
  size?: IconButtonSize
  color?: IconButtonColor
  variant?: IconButtonVariant
  className?: string
  onClick?: () => void
  href?: string
  tooltip?: boolean
  TooltipProps?: TooltipProps
  loading?: boolean
  disabled?: boolean
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  title,
  size = 'medium',
  color = 'secondary',
  variant = 'contained',
  className,
  tooltip = false,
  TooltipProps,
  onClick,
  href,
  loading,
  disabled = false,
  ...restProps
}) => {
  const styleProps = {
    size,
    color,
    variant,
    loading,
    disabled
  }

  const btnAttrs = {
    ...(!href && { role: 'button' }),
    css: styles(styleProps),
    className,
    disabled,
    title,
    ...restProps
  }

  const Element = href ? (
    <a
      {...btnAttrs}
      onClick={onClick}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  ) : (
    <button onClick={onClick} {...btnAttrs}>
      {icon}
    </button>
  )

  return (
    <WithTooltip TooltipProps={TooltipProps} tooltip={tooltip}>
      {Element}
    </WithTooltip>
  )
}

interface WithTooltipProps {
  tooltip: boolean
  TooltipProps?: TooltipProps
  children: ReactNode
}

const WithTooltip: React.FC<WithTooltipProps> = ({
  tooltip,
  TooltipProps = {},
  children
}) => {
  if (tooltip && TooltipProps) {
    return <Tooltip {...TooltipProps}>{children}</Tooltip>
  }

  return children
}

export default IconButton
