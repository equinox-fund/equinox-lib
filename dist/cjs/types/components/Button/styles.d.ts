declare const styles: ({ isDisabled, size, color, variant }: {
    isDisabled?: boolean | undefined;
    size?: string | undefined;
    color?: string | undefined;
    variant?: string | undefined;
}) => import("@emotion/utils").SerializedStyles;
export default styles;
