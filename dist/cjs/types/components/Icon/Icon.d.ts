import React from 'react';
import { IconType } from 'react-icons';
export declare type TIconColor = 'primary' | 'secondary' | 'warning' | 'muted' | 'success' | 'error' | 'info';
export interface IconProps {
    svg: IconType;
    className?: string;
    color?: TIconColor;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
