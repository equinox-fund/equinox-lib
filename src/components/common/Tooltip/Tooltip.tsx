import classmames from 'classnames'
import { ReactNode, useRef, useState } from 'react'
import Overlay from 'react-overlays/Overlay'
import { Placement } from 'react-overlays/usePopper'
import Typography from '../Typography'
import styles from './styles'

export interface TooltipProps {
  children?: ReactNode
  placement?: Placement
  className?: string
  label?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  placement,
  className
}) => {
  const [show, setShow] = useState(false)
  const triggerRef = useRef(null)

  const handleClick = () => {
    if (!label) return

    setShow(true)
  }

  const handleMouseEnter = () => {
    if (!label) return
    setShow(true)
  }

  const handleMouseLeave = () => {
    if (!label) return
    setShow(false)
  }

  return (
    <>
      <div
        id="overlay-toggle"
        data-testid="tooltip-container"
        onClick={handleClick}
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        <span>{children}</span>
      </div>

      <Overlay
        show={show}
        rootClose
        onHide={() => setShow(false)}
        placement={placement}
        target={triggerRef}
      >
        {({ props, arrowProps }) => (
          <div css={styles({ placement })}>
            <div
              data-testid="tooltip-menu"
              className={classmames('tooltip', className)}
              {...props}
            >
              <div className="arrow" {...arrowProps} style={arrowProps.style} />
              <div className="tooltip">
                <Typography size="medium" caption color="dark" lineBreaks>
                  {label}
                </Typography>
              </div>
            </div>
          </div>
        )}
      </Overlay>
    </>
  )
}

export default Tooltip
