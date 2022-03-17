import Title from '../../Title'
import { ReactNode, useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ModalContext } from '../Modal'

export interface ModalTitleProps {
  onClickClose: () => void
  children: ReactNode
}

const ModalTitle: React.FC<ModalTitleProps> = ({ onClickClose, children }) => {
  const { canClose } = useContext(ModalContext)
  const Icon = FaTimes

  return (
    <div className="title-row">
      <Title size="medium" weight="medium">
        {children}
      </Title>
      {canClose && (
        <button
          className="close"
          onClick={onClickClose}
          data-testid="modalClose"
        >
          <Icon className="close-icon" />
        </button>
      )}
    </div>
  )
}

export default ModalTitle
