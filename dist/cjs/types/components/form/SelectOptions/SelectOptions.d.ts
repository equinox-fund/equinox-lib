import React from 'react';
import { CheckboxProps } from '../Checkbox';
export interface SelectOptionsProps extends CheckboxProps {
    options: Array<{
        label: string;
        value: string | number;
    }>;
    optionsAlign?: 'row' | 'col';
    onChange?(event: React.FormEvent<HTMLInputElement>): void;
    value?: string;
    label?: string;
    error?: string;
}
declare const SelectOptions: React.FC<SelectOptionsProps>;
export default SelectOptions;
