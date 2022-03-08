import React from 'react';
import { Color, Size, FontWeight } from './Typography.types';
export interface TypographyProps {
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
export default Typography;
