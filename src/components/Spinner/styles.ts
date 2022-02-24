import tw, { css } from 'twin.macro'

interface Props {
  size: string
}

const styles = ({ size }: Props) => css`
  ${tw`mx-2`}
  ${tw`rounded-full`}
  ${tw`border`}
  ${tw`border-current`}
  border-top-color: transparent;

  ${tw`animate-spin`}

  ${size === 'small' && tw`w-4 h-4`}
  ${size === 'medium' && tw`w-6 h-6`}
  ${size === 'large' && tw`w-10 h-10`}
`
export default styles
