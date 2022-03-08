import React$1, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Placement } from 'react-overlays/usePopper';

declare type TIconColor = 'primary' | 'secondary' | 'warning' | 'muted' | 'success' | 'error' | 'info';
interface IconProps {
    svg: IconType;
    className?: string;
    color?: TIconColor;
}
declare const Icon: React$1.FC<IconProps>;

interface ButtonProps {
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

declare type TypographyColor = 'muted' | 'dark' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
declare type TypographySize = 'small' | 'medium' | 'large';
declare type TypographyFontWeight = 'normal' | 'medium' | 'semibold';

interface TypographyProps {
    size?: TypographySize;
    weight?: TypographyFontWeight;
    className?: string;
    caption?: boolean;
    color?: TypographyColor;
    uppercase?: boolean;
    tag?: 'p' | 'span';
    ellipsis?: boolean;
    hoverAsLink?: boolean;
    lineBreaks?: boolean;
}
declare const Typography: React$1.FC<TypographyProps>;

interface TooltipProps {
    children?: ReactNode;
    placement?: Placement;
    className?: string;
    label?: string;
}
declare const Tooltip: React$1.FC<TooltipProps>;

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const Spinner: React$1.FC<SpinnerProps>;

declare const useWallet: () => void;

export { Button, Icon, Spinner, Tooltip, Typography, useWallet };
