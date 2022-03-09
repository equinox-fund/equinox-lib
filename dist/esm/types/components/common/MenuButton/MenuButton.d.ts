/// <reference types="react" />
export interface MenuButtonProps {
    open: boolean;
    onClick: (open: boolean) => void;
}
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;
