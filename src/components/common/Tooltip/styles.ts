import tw, { css } from 'twin.macro'

const styles = ({ placement = 'bottom' }) => css`
  .popper {
    position: absolute;
    ${tw`z-tooltip`}
  }

  .tooltip {
    ${tw`rounded-lg`}
    ${tw`px-2 py-1`}
    ${tw`text-neutral-dark`}
    ${tw`bg-secondary`}
    ${tw`text-center`}
    max-width: 14rem;

    /**
    ${placement.includes('bottom') && tw`mt-3`}
    ${placement.includes('top') && tw`mb-3`}
    ${placement.includes('right') && tw`ml-3`}
    ${placement.includes('left') && tw`mr-3`}
    */
  }

  .arrow {
    position: absolute;
    ${tw`w-3 h-3`}
    z-index: -1;

    ${placement.includes('bottom') && tw`top-2`}
    ${placement.includes('top') && tw`bottom-2`}
    ${placement.includes('right') && tw`left-2`}
    ${placement.includes('left') && tw`right-2`}
   
    &::before {
      ${tw`w-3 h-3`}
      content: "";
      position: absolute;
      transform: rotate(45deg);
      top: 0;
      left: 0;
      ${tw`bg-secondary`}
    }
  }
`

/**
 *
 */
export default styles
