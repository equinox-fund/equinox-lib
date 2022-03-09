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

interface MenuButtonProps {
    open: boolean;
    onClick: (open: boolean) => void;
}
declare const MenuButton: React.FC<MenuButtonProps>;

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

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const Spinner: React$1.FC<SpinnerProps>;

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

declare type TitleColor = 'muted' | 'dark' | 'gray' | 'primary' | 'secondary' | 'success' | 'error' | 'highlight' | 'warning';
declare type TitleSize = 'small' | 'medium' | 'large' | 'x-large';
declare type TitleFontWeight = 'normal' | 'medium' | 'semibold';

interface TitleProps {
    size?: TitleSize;
    weight?: TitleFontWeight;
    color?: TitleColor;
    className?: string;
    uppercase?: boolean;
    link?: boolean;
    active?: boolean;
}
declare const Title: React$1.FC<TitleProps>;

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

declare const useWallet: () => void;

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

export { Algorand, ArrowRight, Banner, BinanceSmartChain, Button, Card, Checkbox, Close, Ethereum, Heading, Icon, IconButton, MenuButton, Metamask, Minus, Plus, Polygon, Select, SelectOptions, Solana, Spinner, Tether, TextField, Title, Tooltip, Typography, TypographyWithLabel, WalletConnect, useWallet };
