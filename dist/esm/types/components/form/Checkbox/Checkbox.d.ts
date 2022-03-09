import { TypographyProps } from '../../common/Typography';
import { FC, ReactNode } from 'react';
export interface CheckboxProps {
    label?: string | ReactNode;
    error?: string;
    TypographyProps?: TypographyProps;
    size?: 'small' | 'large';
    align?: 'center' | 'start';
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    checked?: boolean;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
