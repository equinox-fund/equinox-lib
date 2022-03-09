import { TypographyProps } from '../../typography/Typography';
import React, { ReactNode } from 'react';
export interface BannerProps {
    text?: string;
    cta?: ReactNode;
    color?: 'highlight' | 'muted';
    className?: string;
    TypographyProps?: TypographyProps | boolean;
    onClose?: () => void;
}
declare const Banner: React.FC<BannerProps>;
export default Banner;
