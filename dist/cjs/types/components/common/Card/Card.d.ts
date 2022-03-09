/// <reference types="react" />
export interface CardProps {
    className?: string;
    loading?: boolean;
    padding?: boolean;
    hoverAsLink?: boolean;
}
declare const Card: React.FC<CardProps>;
export default Card;
