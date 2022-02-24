import classnames from 'classnames'
import { ReactNode, useEffect, useRef, useState, MutableRefObject } from 'react'
import Overlay from 'react-overlays/Overlay'
import { Placement } from 'react-overlays/usePopper'
import Typography from '../Typography'
import styles from './styles'

export interface PopperProps {
  children?: ReactNode
  placement?: Placement
  className?: string
  // can support tooltip or dropdown menu
  tooltip?: string | ReactNode
  menu?: ReactNode
  tooltipContainerRef: MutableRefObject<any> | null
}

const Popper: React.FC<PopperProps> = ({
  children,
  tooltip,
  placement,
  menu,
  className,
  tooltipContainerRef
}) => {
  const [show, setShow] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (triggerRef?.current?.contains(e.target) && show) return

      if (!tooltipContainerRef?.current?.contains(e.target)) {
        return setShow(false)
      }

      if (
        e.target instanceof HTMLAnchorElement ||
        ['button'].includes(e.target.type)
      ) {
        e.target.click()
        return setShow(false)
      }
    }

    if (show) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [show])

  const handleClick = () => {
    if (!menu && !tooltip) return

    setShow(true)
  }

  const handleMouseEnter = () => {
    if (!menu && !tooltip) return
    setShow(true)
  }

  const handleMouseLeave = () => {
    if (!menu && !tooltip) return
    setShow(false)
  }

  let triggerProps = {}

  if (tooltip) {
    triggerProps = {
      ...triggerProps,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onPointerEnter: handleMouseEnter,
      onPointerLeave: handleMouseLeave
    }
  }

  return (
    <>
      <div
        data-testid="popper-container"
        onClick={handleClick}
        {...triggerProps}
        id="overlay-toggle"
        ref={triggerRef}
      >
        <span>{children}</span>
      </div>

      <Overlay
        show={show}
        rootClose
        onHide={() => setShow(false)}
        placement={placement}
        container={tooltipContainerRef}
        target={triggerRef}
      >
        {({ props, arrowProps }) => (
          <div css={styles({ placement })}>
            <div
              data-testid="popper-menu"
              className={classnames('popper', className)}
              {...props}
            >
              <div className="arrow" {...arrowProps} style={arrowProps.style} />
              {menu && <div className="menu">{menu}</div>}
              {tooltip && (
                <div className="tooltip">
                  <Typography size="medium" caption color="dark" lineBreaks>
                    {tooltip}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        )}
      </Overlay>
    </>
  )
}

export default Popper
