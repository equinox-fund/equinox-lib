import tw, { css } from 'twin.macro'

const styles = ({ scrolled, showOverflowGradient }) => css`
  position: relative;
  width: 100%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 1.5rem;
    height: 100%;
    ${tw`bg-gradient-to-r`}
    z-index: 1;
  }

  &:before {
    left: 0;
    ${tw`from-neutral-dark`}
    ${tw`to-transparent`}
    opacity: ${scrolled ? 1 : 0};
    transition: opacity 0.15s;
  }

  &:after {
    right: 0;
    ${tw`from-transparent`}
    ${tw`to-neutral-dark`}
    display: ${showOverflowGradient ? 'block' : 'none'};
  }

  .tabs-container {
    overflow: auto;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .tabs {
    ${tw`flex`}
    ${tw`justify-start`}

    .tab-btn {
      ${tw`px-4`}
      ${tw`py-2`}
      ${tw`text-body-lg`}
      ${tw`xxs:px-6`}
      ${tw`lg:px-8`}

      &.active {
        ${tw`rounded-full`}
        ${tw`bg-neutral-ash`}
      }

      p {
        white-space: nowrap;
      }
    }
  }
`

export default styles
