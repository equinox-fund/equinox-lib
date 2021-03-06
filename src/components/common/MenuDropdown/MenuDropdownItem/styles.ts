import tw, { css } from 'twin.macro'

const styles = ({ iconLeft, disabled, loading, active }) => css`
  padding-top: 0.625rem;
  ${tw`w-full`}
  ${active ? tw`text-secondary` : tw`text-neutral-silver`}
  ${tw`bg-neutral-ash`}
  ${tw`px-4`}
  ${tw`pb-2`}
  ${tw`cursor-pointer`}
  ${tw`flex`}
  ${tw`items-center`}
  ${iconLeft ? tw`flex-row-reverse justify-end` : tw`justify-between`} 
  ${tw`transition-colors`}
  ${tw`duration-base`}
  ${!disabled && tw`hover:bg-neutral-charcoal`}
  ${disabled && tw`cursor-not-allowed`}
  ${(loading || disabled) && tw`text-opacity-40`}
  ${tw`whitespace-nowrap`}

  &:first-of-type {
    padding-top: 0.75rem;
  }

  &:last-of-type {
    padding-bottom: 0.75rem;
  }

  .icon {
    ${iconLeft ? tw`mr-3` : tw`ml-3`}

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

  &.error {
    ${tw`text-system-error`};
  }

  &.warning {
    ${tw`text-system-warning`};
  }

  &.success {
    ${tw`text-system-success`};
  }

  .spinner {
    ${tw`relative`}
    ${tw`w-4`}
    ${tw`h-4`}
    ${iconLeft ? tw`ml-0 mr-3.5` : tw`mr-0 ml-3.5`}
  }
`

export const dividerStyles = css`
  ${tw`px-4`}
  ${tw`my-2`}

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    ${tw`bg-neutral-stone`}
    display: block;
  }
`

export default styles
