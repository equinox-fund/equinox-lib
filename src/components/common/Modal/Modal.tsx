import { createContext, ReactNode, useState } from 'react'
import ModalContainer from 'react-overlays/Modal'
import { animated, config, useSpring } from 'react-spring'
import ModalTitle from './ModalTitle'
import styles, { backdropStyles } from './styles'

export interface ModalProps {
  show: boolean
  setShow: (boolean) => void
  title?: string
  children: ReactNode
  size?: 'small' | 'medium' | 'large' | 'x-large'
  padding?: boolean
  backdropClose?: boolean
  centered?: boolean
}

interface IModalContext {
  enableCloseAction(): void
  disableCloseAction(): void
  canClose: boolean
  closeModal(): void
}

export const ModalContext = createContext<IModalContext>({
  disableCloseAction: null,
  enableCloseAction: null,
  closeModal: null,
  canClose: true
})

const Modal: React.FC<ModalProps> = ({
  show,
  setShow,
  title,
  size = 'medium',
  children,
  padding = true,
  backdropClose = true,
  centered = false
}) => {
  const [canClose, setCanClose] = useState(true)

  const enableCloseAction = () => {
    setCanClose(true)
  }

  const disableCloseAction = () => {
    setCanClose(false)
  }

  const handleBackdropClick = () => {
    if (!backdropClose || !canClose) return

    setShow(false)
  }

  const closeModal = () => {
    return setShow(false)
  }

  const modalSpring = useSpring({
    config: { ...config.stiff, clamp: true },
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(-2rem)'
  })

  return (
    <ModalContainer css={styles({ padding, size, centered })} show={show}>
      <ModalContext.Provider
        value={{ enableCloseAction, disableCloseAction, canClose, closeModal }}
      >
        <div css={backdropStyles} onClick={handleBackdropClick} />
        <animated.div style={modalSpring} className="modal-inner">
          {title && (
            <ModalTitle onClickClose={() => setShow(false)}>{title}</ModalTitle>
          )}
          {children}
        </animated.div>
      </ModalContext.Provider>
    </ModalContainer>
  )
}

export default Modal
