import tw, { css, theme } from 'twin.macro'

const styles = css`
  display: block;
  position: relative;
  ${tw`mb-4`}

  &:hover {
    select,
    .chevron {
      ${tw`text-secondary-dark`}
    }

    select {
      ${tw`border-secondary-dark`}
    }
  }

  .chevron {
    position: absolute;
    top: 0;
    right: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    ${tw`text-secondary`}
    pointer-events: none;
  }

  .helper {
    ${tw`mt-2`}
  }
`

export const selectStyles = ({ error }) => ({
  placeholder: () => css`
    ${tw`text-neutral-stone`}
    ${tw`text-body-sm`}
    line-height: 180% !important;
  `,
  menu: () => css`
    ${tw`mt-4`}
    ${tw`w-full`}
    position: absolute;
    top: 100%;
    z-index: 1;
  `,
  menuList: () => css`
    ${tw`bg-neutral-charcoal`}
    ${tw`border`}
    ${tw`border-neutral-ash`}
    ${tw`rounded-lg`}
    overflow: hidden;
  `,
  option: () => css`
    ${tw`text-secondary`}
    ${tw`px-4`}
    ${tw`py-2`}
    cursor: pointer;

    &:hover {
      ${tw`bg-neutral-ash`}
    }
  `,
  control: (_provided, state) => css`
    display: flex;
    ${tw`justify-between`}
    ${tw`border-2`}
    ${state.isFocused ? tw`border-secondary` : tw`border-neutral-silver`}
    ${error && tw`border-system-error`}
    ${tw`rounded-lg`}
    ${tw`outline-none`}
    ${tw`transition-colors`}
    ${tw`duration-base`}
  `,
  indicatorsContainer: () => css`
    display: none;
  `,
  valueContainer: (_provider, state) => css`
    padding: ${state.hasValue ? '0.75rem' : '0.85rem'};
    ${tw`pr-10`}
    ${tw`pl-5`}
    ${tw`w-full`}
    ${tw`flex`}
    ${tw`flex-wrap`}
    ${tw`space-x-2`}
    cursor: pointer;

    @media (min-width: ${theme`screens.md`}) {
      padding: 0.825rem;
    }
  `,
  input: () => css`
    ${tw`text-secondary`}
    flex: 1 1 auto;
    display: inline-grid;
    grid-area: 1/1/2/3;
    grid-template-columns: 0 min-content;
  `,
  multiValue: () => css`
    ${tw`bg-neutral-ash`}
    ${tw`flex`}
    ${tw`my-1`}
    ${tw`rounded-sm`}
  `,
  multiValueLabel: () => css`
    ${tw`text-secondary`}
    ${tw`text-caption-lg`}
    ${tw`px-3`}
    ${tw`pt-0.5`}
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  multiValueRemove: () => css`
    ${tw`px-1`}
    border-radius: 0 0.125rem 0.125rem 0;

    &:hover {
      ${tw`bg-system-error`}
    }
  `
})

export default styles
