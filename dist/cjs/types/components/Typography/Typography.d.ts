import React from 'react';
import { TypographyColor, TypographySize, TypographyFontWeight } from './Typography.types';
export interface TypographyProps {
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
declare const Typography: React.FC<TypographyProps>;
export default Typography;
