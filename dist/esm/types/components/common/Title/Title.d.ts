import React from 'react';
import { TitleColor, TitleSize, TitleFontWeight } from './Title.types';
export interface TitleProps {
    size?: TitleSize;
    weight?: TitleFontWeight;
    color?: TitleColor;
    className?: string;
    uppercase?: boolean;
    link?: boolean;
    active?: boolean;
}
declare const Title: React.FC<TitleProps>;
export default Title;
