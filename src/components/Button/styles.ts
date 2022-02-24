import tw, { css } from 'twin.macro'

interface Props {
  isDisabled?: boolean | undefined
  size?: 'small' | 'medium' | 'large' | 'x-large'
  color?: 'primary' | 'secondary' | 'muted' | 'highlight'
  variant?: 'contained' | 'outlined' | 'text'
}

const styles = ({ isDisabled, size, color, variant }: Props) => css`
  display: flex;
  align-items: center;
  ${tw`justify-center`}
  position: relative;
  z-index: 0;
  white-space: wrap;
  ${tw`font-sans`}
  ${tw`transition-colors`}
  ${tw`duration-base`}
  ${tw`rounded-full`}

  ${isDisabled ? tw`opacity-80 cursor-not-allowed` : ''}

  &:focus {
    outline: 0;
  }

  svg {
    color: currentColor;
  }

  .icon-right {
    ${size === 'small' && tw`ml-2`}
    ${size === 'medium' && tw`ml-2`}
    ${size === 'large' && tw`ml-4`}
    ${size === 'x-large' && tw`ml-5`}
  }

  .icon-left {
    ${size === 'small' && tw`mr-2`}
    ${size === 'medium' && tw`mr-2`}
    ${size === 'large' && tw`mr-4`}
    ${size === 'x-large' && tw`mr-5`}
  }

  .spinner {
    ${tw`-mr-0`}
    ${size === 'small' && tw`ml-2.5 w-3 h-3`}
    ${size === 'medium' && tw`ml-3.5 w-4 h-4`}
    ${size === 'large' && tw`ml-4 w-5 h-5`}
    ${size === 'x-large' && tw`ml-5 w-5 h-5`}
  }

  ${size === 'small' && tw`px-3 py-1 text-button-sm`}
  ${size === 'medium' && tw`px-5 py-2.5 text-button-md`}
  ${size === 'large' && tw`px-7 py-4 text-button-lg`}
  ${size === 'x-large' && tw`px-8 py-5 text-button-xl`}

  ${variant === 'contained' && buttonContained({ color, isDisabled })}
  ${variant === 'outlined' && buttonOutlined({ color, isDisabled })}
  ${variant === 'text' && buttonText({ color, isDisabled })}
`

const buttonContained = ({ color, isDisabled }: Props) => css`
  ${color === 'primary' && tw`bg-primary text-secondary`}
  ${color === 'secondary' && tw`bg-secondary text-neutral`}




  ${isDisabled ? outlinedDisabled : containedHover({ color })}
`

const containedHover = ({ color }: Props) => css`
  &:hover {
    ${color === 'primary' && tw`bg-primary-light`}
    ${color === 'secondary' && tw`bg-neutral-silver`}
  }

  &:active {
    ${color === 'primary' && tw`bg-primary-dark`}
    ${color === 'secondary' && tw`text-neutral-dark`}
  }
`

const buttonText = ({ color, isDisabled }: Props) => css`
  ${color === 'primary' && tw`text-primary`}
  ${color === 'secondary' && tw`text-secondary`}

  ${!isDisabled && buttonTextHover({ color })}
`

const buttonTextHover = ({ color }: Props) => css`
  &:hover {
    ${color === 'primary' && tw`text-primary-light`}
    ${color === 'secondary' && tw`text-neutral-silver`}
  }

  &:active {
    ${color === 'primary' && tw`text-primary-dark`}
    ${color === 'secondary' && tw`text-neutral-dark`}
  }
`

const buttonOutlined = ({ color, isDisabled }: Props) => css`
  ${tw`border-2`};
  ${color === 'primary' && tw`border-primary text-secondary`}
  ${color === 'secondary' && tw`border-secondary text-secondary`}

  ${isDisabled ? outlinedDisabled : outlinedHover({ color })}
`

const outlinedDisabled = css`
  opacity: 0.5;
`

const outlinedHover = ({ color }: Props) => css`
  &:hover {
    ${color === 'primary' && tw`border-primary-light text-secondary`}
    ${color === 'secondary' && tw`border-neutral-silver text-neutral-silver`}
  }

  &:active {
    ${color === 'primary' && tw`border-primary-dark`}
  }
`

export default styles
