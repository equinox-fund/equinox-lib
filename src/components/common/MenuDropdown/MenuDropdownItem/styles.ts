import tw, { css } from 'twin.macro'

const styles = ({ iconLeft, disabled, loading, active }) => css`
  padding-top: 0.625rem;
  ${tw`w-full`}
  ${active ? tw`bg-neutral-charcoal` : tw`bg-neutral-ash`}
  ${tw`text-secondary`}
  ${tw`px-4`}
  ${tw`pb-2`}
  ${tw`cursor-pointer`}
  ${tw`flex`}
  ${tw`items-center`}
  ${iconLeft ? tw`flex-row-reverse justify-end` : tw`justify-between`} 
  ${tw`transition-colors`}
  ${tw`duration-base`}
  ${tw`hover:bg-neutral-charcoal`}
  ${disabled && tw`cursor-not-allowed`}
  ${(loading || disabled) && tw`text-opacity-40`}

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

export default styles
