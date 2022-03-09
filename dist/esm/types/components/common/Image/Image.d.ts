/// <reference types="react" />
export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    onLoad?: () => void;
    showPreloader?: boolean;
}
declare const Image: React.FC<ImageProps>;
export default Image;
