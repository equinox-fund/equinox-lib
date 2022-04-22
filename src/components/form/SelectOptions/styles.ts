import tw, { css } from 'twin.macro'

const styles = () => css`
  .label {
    ${tw`mb-2`}
  }

  .label-error {
    ${tw`mt-2`}
  }

  .options {
    ${tw`flex`}

    &.col {
      ${tw`flex-col space-y-3`}
    }

    &.row {
      ${tw`flex-row space-x-3`}
    }
  }
`

export default styles
