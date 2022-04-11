import tw, { css } from 'twin.macro'

const styles = ({ open, dropdownAlign }) => css`
  position: relative;
  ${tw`select-none`}

  .dropdown-list {
    position: absolute;
    top: calc(100% + 1rem);
    ${dropdownAlign === 'left' && tw`left-0`}
    ${dropdownAlign === 'right' && tw`right-0`}
    ${dropdownAlign === 'center' && tw`left-1/2`}
    transform: ${dropdownAlign === 'center' ? 'translateX(-50%)' : 'none'};
    ${tw`z-10`}
    ${tw`w-full`}
    display: ${open ? 'block' : 'none'};
    min-width: 10rem;
    
    .dropdown-list-items {
      ${tw`bg-neutral-ash`}
      ${tw`rounded-md`}
      overflow: hidden;
    }

    &:before {
      content: '';
      ${tw`w-3`}
      ${tw`h-3`}
      ${tw`bg-neutral-ash`}
      position: absolute;
      top: 1px;
      ${dropdownAlign === 'right' ? tw`right-0 mr-4` : tw`left-0 ml-4`}
      ${dropdownAlign === 'center' && tw`left-1/2 -ml-2`}
      ${tw`rounded-sm`}
      overflow: hidden;
      transform-origin: top left;
      transform: rotate(-45deg);
      z-index: -1;
    }
  }

  .dropdown-chevron {
    transform: rotate(90deg);
    ${tw`ml-6`}
  }

  .dropdown-icon {
    ${tw`mr-3`}

    svg {
      path {
        ${tw`transition-colors`};
        ${tw`duration-base`};
      }

      path[stroke] {
        ${tw`stroke-current`};
      }

      path[fill] {
        ${tw`fill-current`};
      }
    }
  }
`
export default styles
