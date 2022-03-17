import React, { ReactNode, useRef, useState, useEffect } from 'react'
import MenuDropdownItem, { MenuDropdownItemProps } from './MenuDropdownItem'
import ArrowRight from '../../svg/ArrowRight'
import Button, { ButtonProps } from '../Button'
import styles from './styles' 

export interface MenuDropdownProps {
  children: ReactNode
  items: MenuDropdownItemProps[]
  iconsLeft?: boolean
  ButtonProps?: ButtonProps
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  children,
  items,
  iconsLeft = false,
  ButtonProps = {}
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div
      ref={ref}
      css={styles({ open })}
      className="relative select-none"
      data-testid="menu-dropdown"
    >
      <Button
        className="justify-start w-full"
        variant="outlined"
        color="secondary"
        justify="between"
        {...ButtonProps}
        onClick={() => setOpen(!open)}
      >
        {children}
        <ArrowRight className="dropdown-chevron" />
      </Button>
      <div className="dropdown-list" data-testid="dropdown-list">
        <div className="dropdown-list-items">
          {items.map((item, key) => (
            <MenuDropdownItem
              key={key}
              {...item}
              iconLeft={iconsLeft}
              closeDropdown={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuDropdown
