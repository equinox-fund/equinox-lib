import tw, { css } from 'twin.macro'

const styles = css`
  ${tw`w-full`}

  &.root {
    ${tw`border-b`}
    ${tw`border-neutral-charcoal`}
    
    &.open {
      ${tw`pb-6`}
      ${tw`md:pb-8`}
    }

    &:first-of-type {
      ${tw`border-t`}
    }

    .label {
      ${tw`block`}
      ${tw`w-full`}
      ${tw`text-left`}
      ${tw`flex`}
      ${tw`items-center`}
      ${tw`justify-between`}

      ${tw`py-6`}
      ${tw`md:py-8`}
  
      &:focus {
        outline: 0;
      }

      h4 {
        ${tw`text-heading-sm`}
      }

      .icon {
        ${tw`w-7`}
        ${tw`flex-shrink-0`}
      }
    }

    .content {
      ${tw`px-4`}

      ${tw`md:px-6`}
      ${tw`max-w-5xl`}
    }
  }
`

export default styles
