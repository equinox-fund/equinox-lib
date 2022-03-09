import React, { FC, ReactNode } from 'react';
export interface TextFieldProps {
    label?: string;
    helper?: string;
    type?: 'text' | 'password' | 'email';
    size?: 'small' | 'medium';
    error?: string;
    placeholder?: string;
    icon?: ReactNode;
    className?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    [t: string]: any;
    borders?: boolean;
}
declare const TextField: FC<TextFieldProps>;
export default TextField;
