import React$1, { ReactNode } from 'react';
import { IconType } from 'react-icons';

declare type TIconColor = 'primary' | 'secondary' | 'warning' | 'muted' | 'success' | 'error' | 'info';

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

export { Button, Typography };
