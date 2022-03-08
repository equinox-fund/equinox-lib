import React from 'react';
import { HeadingColor, HeadingSize, HeadingFontWeight } from './Heading.types';
export interface HeadingProps {
    size?: HeadingSize;
    weight?: HeadingFontWeight;
    color?: HeadingColor;
    className?: string;
    uppercase?: boolean;
    link?: boolean;
    active?: boolean;
}
declare const Heading: React.FC<HeadingProps>;
export default Heading;
