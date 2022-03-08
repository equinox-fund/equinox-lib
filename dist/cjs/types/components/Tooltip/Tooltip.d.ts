import React, { ReactNode } from 'react';
import { Placement } from 'react-overlays/usePopper';
export interface TooltipProps {
    children?: ReactNode;
    placement?: Placement;
    className?: string;
    label?: string;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
