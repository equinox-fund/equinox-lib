import styles from './styles'

export interface MenuButtonProps {
  open: boolean
  onClick: (open: boolean) => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ open = false, onClick }) => (
  <button css={styles({ open })} onClick={() => onClick(!open)}>
    <div className="btn">
      <div className="burger-wrap">
        <span className="burger-top" />
        <span className="burger-center" />
        <span className="burger-bottom" />
      </div>
    </div>
  </button>
)

export default MenuButton
