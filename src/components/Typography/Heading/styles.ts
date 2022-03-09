import tw, { css } from 'twin.macro'

// @ts-ignore
const applyLink = (active) => css`
  border-bottom: 1px solid transparent;
  transition: border-color;
  ${tw`duration-base`};

  &:hover {
    ${tw`border-current`};
  }

  ${active && tw`border-current`};
`

// @ts-ignore
const styles = ({ size, weight, color, uppercase, link, active }) => css`
  ${weight === 'normal' && tw`font-normal`};
  ${weight === 'medium' && tw`font-medium`};
  ${weight === 'semibold' && tw`font-semibold`};

  ${color === 'muted' && tw``};
  ${color === 'dark' && tw`text-neutral`};
  ${color === 'gray' && tw`text-neutral-ash`};
  ${color === 'primary' && tw`text-secondary`};
  ${color === 'secondary' && tw`text-neutral-dark`};
  ${color === 'success' && tw`text-system-success`};
  ${color === 'error' && tw`text-system-error`};
  ${color === 'highlight' && tw`text-primary`};
  ${color === 'warning' && tw`text-system-warning`};
  ${color === 'transparent' && tw`text-transparent`};

  ${size === 'large' && tw`text-display-lg`};
  ${size === 'small' && tw`text-display-sm`};

  ${uppercase && tw`uppercase`};

  ${link && applyLink(active)};
`

export default styles
