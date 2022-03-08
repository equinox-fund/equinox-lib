import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { TIconColor } from '../Icon';
export interface ButtonProps {
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large' | 'x-large';
    color?: 'primary' | 'secondary';
    variant?: 'contained' | 'outlined' | 'text';
    iconPosition?: 'left' | 'right';
    className?: string;
    onClick?: (event: any) => void;
    loading?: boolean;
    disabled?: boolean;
    submit?: boolean;
    icon?: IconType;
    IconProps?: {
        color?: TIconColor;
        className?: string;
    };
}
declare const Button: React.FC<ButtonProps>;
export default Button;
