import tw, { css } from 'twin.macro'

const styles = css`
  max-height: 16rem;
  overflow-y: scroll;

  .offer-row {
    ${tw`mb-4`}
    
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      ${tw`w-full`}
    }
  }
`

export default styles
