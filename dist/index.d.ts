/// <reference types="react" />
import React$1, { ReactNode, FC } from 'react';
import { IconType } from 'react-icons';
import { Placement } from 'react-overlays/usePopper';

declare type TypographyColor = 'muted' | 'dark' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
declare type TypographySize = 'small' | 'medium' | 'large';
declare type TypographyFontWeight = 'normal' | 'medium' | 'semibold';

interface TypographyProps {
    size?: TypographySize;
    weight?: TypographyFontWeight;
    className?: string;
    caption?: boolean;
    color?: TypographyColor;
    uppercase?: boolean;
    tag?: 'p' | 'span';
    ellipsis?: boolean;
    hoverAsLink?: boolean;
    lineBreaks?: boolean;
}
declare const Typography: React$1.FC<TypographyProps>;

interface BannerProps {
    text?: string;
    cta?: ReactNode;
    color?: 'highlight' | 'muted';
    className?: string;
    TypographyProps?: TypographyProps | boolean;
    onClose?: () => void;
}
declare const Banner: React$1.FC<BannerProps>;

declare type TIconColor = 'primary' | 'secondary' | 'warning' | 'muted' | 'success' | 'error' | 'info';
interface IconProps {
    svg: IconType;
    className?: string;
    color?: TIconColor;
}
declare const Icon: React$1.FC<IconProps>;

interface ButtonProps {
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large' | 'x-large';
    color?: 'primary' | 'secondary';
    variant?: 'contained' | 'outlined' | 'text';
    iconPosition?: 'left' | 'right';
    className?: string;
    onClick?: (event: any) => void;
    loading?: boolean;
    disabled?: boolean;
    submit?: boolean;
    icon?: IconType;
    IconProps?: {
        color?: TIconColor;
        className?: string;
    };
}
declare const Button: React.FC<ButtonProps>;

interface CardProps {
    className?: string;
    loading?: boolean;
    padding?: boolean;
    hoverAsLink?: boolean;
}
declare const Card: React.FC<CardProps>;

interface DisplayDateProps {
    date: string;
    format?: 'timeTo' | 'date' | 'dateTime' | 'time';
    utc?: boolean;
    TypographyProps?: TypographyProps;
}
declare const DisplayDate: React.FC<DisplayDateProps>;

interface DividerProps {
    className?: string;
    horizontal?: boolean;
}
declare const Divider: React.FC<DividerProps>;

interface TooltipProps {
    children?: ReactNode;
    placement?: Placement;
    className?: string;
    label?: string;
}
declare const Tooltip: React$1.FC<TooltipProps>;

declare type IconButtonColor = 'warning' | 'dark' | 'primary' | 'secondary';
declare type IconButtonSize = 'small' | 'medium' | 'large';
declare type IconButtonVariant = 'contained' | 'outlined';

interface IconButtonProps {
    icon: ReactNode;
    title: string;
    size?: IconButtonSize;
    color?: IconButtonColor;
    variant?: IconButtonVariant;
    className?: string;
    onClick?: () => void;
    href?: string;
    tooltip?: boolean;
    TooltipProps?: TooltipProps;
    loading?: boolean;
    disabled?: boolean;
}
declare const IconButton: React.FC<IconButtonProps>;

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    onLoad?: () => void;
    showPreloader?: boolean;
}
declare const Image: React.FC<ImageProps>;

interface MenuButtonProps {
    open: boolean;
    onClick: (open: boolean) => void;
}
declare const MenuButton: React.FC<MenuButtonProps>;

interface ProjectBadgeProps {
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary' | 'success';
    className?: string;
}
declare const ProjectBadge: React.FC<ProjectBadgeProps>;

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const Spinner: React$1.FC<SpinnerProps>;

declare type HeadingColor = 'muted' | 'dark' | 'gray' | 'primary' | 'secondary' | 'success' | 'error' | 'highlight' | 'warning' | 'transparent';
declare type HeadingSize = 'small' | 'large';
declare type HeadingFontWeight = 'normal' | 'medium' | 'semibold';

interface HeadingProps {
    size?: HeadingSize;
    weight?: HeadingFontWeight;
    color?: HeadingColor;
    className?: string;
    uppercase?: boolean;
    link?: boolean;
    active?: boolean;
}
declare const Heading: React$1.FC<HeadingProps>;

interface TypographyWithLabelProps {
    label: string;
    children: ReactNode | string;
    TypographyProps?: TypographyProps | boolean;
    TypographyLabelProps?: TypographyProps;
    direction?: 'row' | 'column';
    reversed?: boolean;
    className?: string;
}
declare const TypographyWithLabel: React.FC<TypographyWithLabelProps>;

interface CheckboxProps {
    label?: string | ReactNode;
    error?: string;
    TypographyProps?: TypographyProps;
    size?: 'small' | 'large';
    align?: 'center' | 'start';
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    checked?: boolean;
}
declare const Checkbox: FC<CheckboxProps>;

interface SelectProps {
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

interface SelectOptionsProps extends CheckboxProps {
    options: Array<{
        label: string;
        value: string | number;
    }>;
    optionsAlign?: 'row' | 'col';
    onChange?(event: React$1.FormEvent<HTMLInputElement>): void;
    value?: string;
    label?: string;
    error?: string;
}
declare const SelectOptions: React$1.FC<SelectOptionsProps>;

interface TextFieldProps {
    label?: string;
    helper?: string;
    type?: 'text' | 'password' | 'email';
    size?: 'small' | 'medium';
    error?: string;
    placeholder?: string;
    icon?: ReactNode;
    className?: string;
    onChange?(event: React$1.ChangeEvent<HTMLInputElement>): void;
    [t: string]: any;
    borders?: boolean;
}
declare const TextField: FC<TextFieldProps>;

interface AlgorandProps {
    className?: string;
}
declare const Algorand: React.FC<AlgorandProps>;

interface ArrowRightProps {
    className?: string;
}
declare const ArrowRight: React.FC<ArrowRightProps>;

interface BinanceSmartChainProps {
    className?: string;
}
declare const BinanceSmartChain: React.FC<BinanceSmartChainProps>;

interface CloseProps {
    className?: string;
    color?: 'white' | 'black';
}
declare const Close: React.FC<CloseProps>;

interface EthereumProps {
    className?: string;
}
declare const Ethereum: React.FC<EthereumProps>;

interface MetamaskProps {
    className?: string;
}
declare const Metamask: React.FC<MetamaskProps>;

interface MinusProps {
    className?: string;
}
declare const Minus: React.FC<MinusProps>;

interface PlusProps {
    className?: string;
}
declare const Plus: React.FC<PlusProps>;

interface PolygonProps {
    className?: string;
}
declare const Polygon: React.FC<PolygonProps>;

interface SolanaProps {
    className?: string;
}
declare const Solana: React.FC<SolanaProps>;

interface TetherProps {
    className?: string;
}
declare const Tether: React.FC<TetherProps>;

interface WalletConnectProps {
    className?: string;
}
declare const WalletConnect: React.FC<WalletConnectProps>;

declare const useWallet: () => void;

export { Algorand, ArrowRight, Banner, BinanceSmartChain, Button, Card, Checkbox, Close, DisplayDate, Divider, Ethereum, Heading, Icon, IconButton, Image, MenuButton, Metamask, Minus, Plus, Polygon, ProjectBadge, Select, SelectOptions, Solana, Spinner, Tether, TextField, Typography as Title, Tooltip, Typography, TypographyWithLabel, WalletConnect, useWallet };
