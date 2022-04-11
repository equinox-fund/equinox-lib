import React, { ReactNode, useState, useEffect, MouseEvent } from 'react'
import Spinner from '../../Spinner'
import Divider from '../../Divider'
import styles, { dividerStyles } from './styles'

export interface MenuDropdownItemProps {
  name: string
  label: string
  href?: string
  external?: boolean
  action?: (e: MouseEvent<HTMLElement>) => void
  icon?: ReactNode
  iconLeft?: boolean
  loading?: boolean
  disabled?: boolean
  closeDropdown?: () => void
  onClick: (item: MenuDropdownItemProps) => void
  active: boolean
  divider: boolean
}

const MenuDropdownItem: React.FC<MenuDropdownItemProps> = (props) => {
  const {
    name,
    label,
    href,
    external = false,
    action,
    icon,
    iconLeft = false,
    loading = false,
    disabled = false,
    closeDropdown,
    onClick,
    active,
    divider = false
  } = props
  const [pending, setPending] = useState(false)

  useEffect(() => {
    if (!loading && pending) {
      closeDropdown()
    }
  }, [loading])

  const handleItemClick = (e) => {
    if (disabled || loading) {
      e.preventDefault()
      return false
    }
    if (action) {
      action(e)
      setPending(true)
    } else {
      closeDropdown()
    }
    onClick(props)
  }

  const iconEl = icon ? <div className="icon">{icon}</div> : null

  const children = (
    <React.Fragment>
      {label}
      {loading ? <Spinner className="spinner" /> : iconEl}
    </React.Fragment>
  )

  const css = styles({ iconLeft, disabled, loading, active })

  return href ? (
    <>
      {divider && <div css={dividerStyles} />}
      <a
        css={css}
        href={href}
        target={external ? '_blank' : '_self'}
        rel="noreferrer noopener"
        onClick={handleItemClick}
      >
        {children}
      </a>
    </>
  ) : (
    <button css={css} onClick={handleItemClick}>
      {children}
    </button>
  )
}

export default MenuDropdownItem
