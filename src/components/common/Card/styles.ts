import tw, { css } from 'twin.macro'

const loadingStyles = css`
  .loading-view {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const hoverStyles = css`
  &:hover {
    transform: translateY(-0.25rem);
  }
`

const styles = ({ loading = true, padding = true, hoverAsLink = false }) => css`
  position: relative;
  ${tw`border`}
  ${tw`border-neutral-charcoal`}
  ${tw`rounded-lg`}
  ${tw`bg-neutral`}
  ${tw`transition-transform`}
  ${tw`duration-base`}

  ${padding === true && tw`py-6 px-4 md:px-8`}
  ${loading === true && loadingStyles}
  ${hoverAsLink === true && hoverStyles}
`

export default styles
