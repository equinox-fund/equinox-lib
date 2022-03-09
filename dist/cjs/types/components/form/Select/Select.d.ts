import { FC } from 'react';
export interface SelectProps {
    options: Array<{
        value: string | number;
        label: string;
    }>;
    label?: string;
    helper?: string;
    placeholder?: string;
    error?: string;
    value?: string | number;
    className?: string;
    onChange?(event: React.ChangeEvent<HTMLSelectElement>): void;
}
declare const Select: FC<SelectProps>;
export default Select;
