import tw, { css } from 'twin.macro'

// @ts-ignore
const buttonSmall = (variant) => css`
  padding: ${variant === 'contained' ? '0 0.0625rem' : '0.375em'};
  border-width: ${variant === 'contained' ? 0 : '1px'};

  svg {
    width: 1.25rem;
  }
`

// @ts-ignore
const buttonMedium = (variant) => css`
  padding: ${variant === 'contained' ? '0 0.125rem' : '0.5rem'};
  border-width: ${variant === 'contained' ? 0 : '1px'};

  svg {
    width: 1.5rem;
  }
`

// @ts-ignore
const buttonLarge = (variant) => css`
  padding: ${variant === 'contained' ? '0 0.25rem' : '0.75rem'};
  border-width: ${variant === 'contained' ? 0 : '2px'};

  svg {
    width: 2rem;
  }
`

// @ts-ignore
const styles = ({ size, color, variant, loading, disabled }) => css`
  ${tw`rounded-full`};
  display: flex;
  align-items: center;
  justify-content: center;
  ${loading ? tw`opacity-60 cursor-not-allowed` : ''}
  transition: opacity, color;
  ${tw`duration-slow`};

  ${size === 'small' && buttonSmall(variant)};
  ${size === 'medium' && buttonMedium(variant)};
  ${size === 'large' && buttonLarge(variant)};

  ${color === 'warning' && tw`text-system-warning hover:opacity-80`};
  ${color === 'dark' && tw`text-neutral hover:text-neutral-dark`};
  ${color === 'primary' && tw`text-primary hover:text-primary-light`};
  ${color === 'secondary' && tw`text-secondary hover:text-neutral-silver`};

  ${variant === 'outlined' && tw`border-current`};

  ${disabled ? tw`opacity-80 cursor-not-allowed ` : ''}

  &:focus {
    outline: 0;
  }
`

export default styles
