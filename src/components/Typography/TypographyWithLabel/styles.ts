import tw, { css } from 'twin.macro'

// @ts-ignore
const styles = ({ direction, reversed }) => css`
  display: flex;
  justify-content: space-between;
  ${tw`mb-2`}
  width: 100%;

  ${direction === 'column' && tw`flex-col`}
  ${direction === 'column' && reversed && tw`flex-col-reverse`}
  ${direction === 'row' && tw`flex-wrap items-center`}
  ${direction === 'row' && reversed && tw`flex-row-reverse`}
`

export default styles
