import { ReactNode } from 'react';
import { TooltipProps } from '../../common/Tooltip';
import { IconButtonColor, IconButtonSize, IconButtonVariant } from './IconButton.types';
export interface IconButtonProps {
    icon: ReactNode;
    title: string;
    size?: IconButtonSize;
    color?: IconButtonColor;
    variant?: IconButtonVariant;
    className?: string;
    onClick?: () => void;
    href?: string;
    tooltip?: boolean;
    TooltipProps?: TooltipProps;
    loading?: boolean;
    disabled?: boolean;
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
