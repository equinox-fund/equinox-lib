import tw, { css } from 'twin.macro'

const styles = ({
  size = 'medium',
  weight = 'normal',
  color = 'primary',
  caption = false,
  variantHover = 'normal',
  ellipsis = false,
  uppercase = false,
  underline = false,
  lineBreaks = false
}) => css`
  ${color === 'muted' && tw`text-neutral-silver`};
  ${color === 'dark' && tw`text-neutral`};
  ${color === 'primary' && tw`text-primary`};
  ${color === 'secondary' && tw`text-secondary`};
  ${color === 'error' && tw`text-system-error`};
  ${color === 'warning' && tw`text-system-warning`};
  ${color === 'success' && tw`text-system-success`};
  ${color === 'info' && tw`text-system-info`};

  ${size === 'small' && tw`text-body-sm`};
  ${size === 'medium' && tw`text-body-md`};
  ${size === 'large' && tw`text-body-lg`};
  ${size === 'small' && caption && tw`text-caption-sm`};
  ${size === 'medium' && caption && tw`text-caption-md`};
  ${size === 'large' && caption && tw`text-caption-lg`};

  ${weight === 'normal' && tw`font-normal`};
  ${weight === 'medium' && tw`font-medium`};
  ${weight === 'semibold' && tw`font-semibold`};

  ${uppercase && tw`uppercase`};

  ${lineBreaks && tw`whitespace-pre-line`};

  ${ellipsis && tw`overflow-ellipsis overflow-hidden`};

  ${underline &&
  css`
    cursor: pointer;
    text-decoration: underline;
  `}

  &.hover-as-link {
    transition: color;

    &:hover {
      ${tw`text-neutral-silver`}
      ${tw`cursor-pointer`}
      ${color === 'muted' && tw`text-secondary`};
    }
  }
`

export default styles
