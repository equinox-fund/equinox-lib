import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: React.FC<ButtonProps>;

declare type Color = 'muted' | 'dark' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
declare type Size = 'small' | 'medium' | 'large';
declare type FontWeight = 'normal' | 'medium' | 'semibold';

interface TypographyProps {
    size?: Size;
    weight?: FontWeight;
    className?: string;
    caption?: boolean;
    color?: Color;
    uppercase?: boolean;
    tag?: 'p' | 'span';
    ellipsis?: boolean;
    hoverAsLink?: boolean;
    lineBreaks?: boolean;
}
declare const Typography: React.FC<TypographyProps>;

export { Button, Typography };
