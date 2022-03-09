import tw, { css } from 'twin.macro'

const styles = css`
  display: block;
  position: relative;

  select {
    width: 100%;
    ${tw`text-button-md`}
    ${tw`text-secondary`}
    ${tw`font-sans`}
    ${tw`border`}
    ${tw`border-secondary`}
    background-color: black;
    ${tw`pr-10`}
    ${tw`pl-5`}
    ${tw`py-3`}
    ${tw`outline-none`}
    ${tw`appearance-none`}
    ${tw`rounded-full`}
    ${tw`transition-colors`}
    ${tw`duration-base`}
    cursor: pointer;

    &.error {
      ${tw`border-system-error`};
    }

    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
      margin-right: 2rem;
    }
  }

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
    ${tw`mt-0.5`}
    ${tw`ml-4`}
  }
`

export default styles
