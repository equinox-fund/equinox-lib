import { ReactNode } from 'react';
import { TypographyProps } from '../Typography/Typography';
export interface TypographyWithLabelProps {
    label: string;
    children: ReactNode | string;
    TypographyProps?: TypographyProps | boolean;
    TypographyLabelProps?: TypographyProps;
    direction?: 'row' | 'column';
    reversed?: boolean;
    className?: string;
}
declare const TypographyWithLabel: React.FC<TypographyWithLabelProps>;
export default TypographyWithLabel;
