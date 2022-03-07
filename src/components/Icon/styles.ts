import tw, { css } from 'twin.macro'

const styles = ({ color }) => css`
  ${color === 'muted' && tw`text-neutral-silver`};
  ${color === 'dark' && tw`text-neutral`};
  ${color === 'primary' && tw`text-primary`};
  ${color === 'secondary' && tw`text-secondary`};
  ${color === 'error' && tw`text-system-error`};
  ${color === 'warning' && tw`text-system-warning`};
  ${color === 'success' && tw`text-system-success`};
  ${color === 'info' && tw`text-system-info`};
`

export default styles
