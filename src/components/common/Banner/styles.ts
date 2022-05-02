import tw, { css } from 'twin.macro'

const styles = ({ color = 'highlight', align }) => css`
  ${color === 'highlight' && tw`bg-primary`}
  ${color === 'muted' && tw`bg-neutral-charcoal`}

  ${tw`rounded-lg`}

  .banner-inner {
    ${tw`py-6`}
    ${tw`px-4`}
    ${tw`mb-0`}
    ${tw`text-center`}
    ${tw`xs:py-3`}
    ${tw`xs:text-left`}
    ${tw`xs:flex`}
    ${tw`xs:flex-nowrap`}
    ${align === 'center' ? tw`xs:justify-center` : tw`xs:justify-start`}
    ${tw`xs:items-center`}
  }

  .text {
    ${tw`mb-4`}
    ${tw`xs:mb-0`}
    ${tw`xs:mr-4`}
  }

  align-items,
  button {
    ${tw`w-full`}
    ${tw`xs:w-auto`}
  }
`

export default styles
