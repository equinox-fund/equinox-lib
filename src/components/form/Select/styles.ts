import tw, { css } from 'twin.macro'

const styles = ({ value }) => css`
  display: block;
  position: relative;
  ${tw`mb-4`}

  select {
    width: 100%;
    ${tw`text-body-sm`}
    ${value ? tw`text-secondary` : tw`text-neutral-stone`}
    ${tw`font-sans`}
    ${tw`border-2`}
    ${tw`border-neutral-silver`}
    background-color: black;
    ${tw`pr-10`}
    ${tw`pl-4`}
    ${tw`py-4`}
    ${tw`outline-none`}
    ${tw`appearance-none`}
    ${tw`rounded-lg`}
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

    &:focus {
      ${tw`border-secondary`};
    }

    &:focus::placeholder {
      opacity: 1;
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
    position: absolute;
    top: 100%;
    left: 0;
    ${tw`mt-2`}
  }
`

export default styles
