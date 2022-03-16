import tw, { css } from 'twin.macro'

const styles = ({ open }) => css`
  min-width: 14rem;
  position: relative;

  .dropdown-list {
    position: absolute;
    top: calc(100% + 1rem);
    ${tw`left-0`}
    ${tw`z-10`}
    ${tw`w-full`}
    display: ${open ? 'block' : 'none'};

    .dropdown-list-items {
      ${tw`rounded-md`}
      overflow: hidden;
    }

    &:before {
      content: '';
      ${tw`w-3`}
      ${tw`h-3`}
      ${tw`bg-neutral-ash`}
      position: absolute;
      top: 0;
      left: 50%;
      ${tw`rounded-sm`}
      overflow: hidden;
      transform-origin: top left;
      transform: rotate(-45deg);
      ${tw`-ml-1.5`}
      z-index: -1;
    }
  }

  .dropdown-chevron {
    transform: rotate(90deg);
    ${tw`ml-6`}
  }
`
export default styles
