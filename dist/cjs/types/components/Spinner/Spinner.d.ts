import React from 'react';
export interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
