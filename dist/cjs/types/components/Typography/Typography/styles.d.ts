declare const styles: ({ size, weight, color, caption, variantHover, ellipsis, uppercase, underline, lineBreaks }: {
    size?: string | undefined;
    weight?: string | undefined;
    color?: string | undefined;
    caption?: boolean | undefined;
    variantHover?: string | undefined;
    ellipsis?: boolean | undefined;
    uppercase?: boolean | undefined;
    underline?: boolean | undefined;
    lineBreaks?: boolean | undefined;
}) => import("@emotion/utils").SerializedStyles;
export default styles;
