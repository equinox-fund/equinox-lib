import tw, { css } from 'twin.macro'

// @ts-ignore
const styles = ({ horizontal }) => css`
  width: ${horizontal ? '100%' : '2px'};
  ${horizontal && tw`h-px`};
  ${tw`bg-neutral-charcoal`};
`

export default styles
