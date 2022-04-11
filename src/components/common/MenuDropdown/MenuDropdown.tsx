import React, { ReactNode, useRef, useState, useEffect, useLayoutEffect } from 'react'
import MenuDropdownItem, { MenuDropdownItemProps } from './MenuDropdownItem'
import ArrowRight from '../../svg/ArrowRight'
import Button, { ButtonProps } from '../Button'
import styles from './styles' 

export interface MenuDropdownProps {
  children: string | ReactNode
  items: MenuDropdownItemProps[]
  defaultItemName?: string
  iconsLeft?: boolean
  dropdownAlign: 'left' | 'center' | 'right'
  ButtonProps?: ButtonProps
  className?: string
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  children,
  items,
  defaultItemName = null,
  iconsLeft = false,
  dropdownAlign = 'center',
  ButtonProps = {},
  className
}) => {

  const defaultItem = defaultItemName ? items.find(i => i.name === defaultItemName) : null

  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] =
    useState<MenuDropdownItemProps | null>(defaultItem)
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
      css={styles({ open, dropdownAlign })}
      className={className}
      data-testid="menu-dropdown"
    >
      {typeof children === 'string' ? (
        <Button
          className="justify-start w-full"
          variant="outlined"
          color="secondary"
          justify="between"
          {...ButtonProps}
          onClick={() => setOpen(!open)}
        >
          {activeItem ? (
            <span className="flex items-center">
              {activeItem.icon && iconsLeft && (
                <div className="dropdown-icon">{activeItem.icon}</div>
              )}
              {activeItem.label}
            </span>
          ) : (
            children
          )}
          <ArrowRight className="dropdown-chevron" />
        </Button>
      ) : (
        <button onClick={() => setOpen(!open)} type="button">
          {children}
        </button>
      )}

      <div className="dropdown-list" data-testid="dropdown-list">
        <div className="dropdown-list-items">
          {items.map((item, key) => (
            <MenuDropdownItem
              key={key}
              {...item}
              iconLeft={iconsLeft}
              closeDropdown={() => setOpen(false)}
              onClick={(item) => setActiveItem(item)}
              active={activeItem ? activeItem.name === item.name : false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuDropdown
