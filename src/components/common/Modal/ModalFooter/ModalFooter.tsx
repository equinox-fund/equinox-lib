import { ReactNode } from 'react'

export interface ModalFooterProps {
  buttonPrimary?: ReactNode
  buttonSecondary?: ReactNode
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  buttonSecondary,
  buttonPrimary
}) => {
  return (
    <div className="footer-row">
      {buttonPrimary && <div>{buttonPrimary}</div>}
      {buttonSecondary && <div>{buttonSecondary}</div>}
    </div>
  )
}

export default ModalFooter
