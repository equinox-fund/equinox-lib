import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: React.FC<ButtonProps>;

interface TypographyProps {
    size?: 'small' | 'medium' | 'large';
    weight?: 'normal' | 'medium' | 'semibold';
    className?: string;
    caption?: boolean;
    color?: 'muted' | 'dark' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
    uppercase?: boolean;
    tag?: 'p' | 'span';
    ellipsis?: boolean;
    hoverAsLink?: boolean;
    lineBreaks?: boolean;
}
declare const Typography: React.FC<TypographyProps>;

export { Button, Typography };
