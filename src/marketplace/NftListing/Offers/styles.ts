import tw, { css } from 'twin.macro'

const styles = css`
  max-height: 16rem;
  overflow-y: scroll;

  .history-row {
    ${tw`flex`}
    ${tw`justify-between`}
    ${tw`mb-4`}
  }
`

export default styles
