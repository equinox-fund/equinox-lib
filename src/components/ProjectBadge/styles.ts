import tw, { css } from 'twin.macro'

const styles = ({ size, color }) => css`
  ${tw`rounded`}
  ${tw`text-neutral-dark`}
  ${tw`font-medium`}
  ${tw`text-center`}
  ${tw`uppercase`}
  cursor: help;

  ${size === 'small' ? tw`text-caption-sm` : tw`text-caption-md`}
  ${size === 'small' ? tw`px-1.5 pt-0.5` : tw`px-2 pt-0.5`}

  ${color === 'primary' && tw`bg-primary`}
  ${color === 'secondary' && tw`bg-secondary`}
  ${color === 'success' && tw`bg-system-success`}
`

export default styles
