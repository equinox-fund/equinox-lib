import tw, { css } from 'twin.macro'

const styles = ({ size, borders }) => css`
  display: block;
  ${tw`mb-4`};
  position: relative;

  .input-wrapper {
    position: relative;
  }

  input {
    width: 100%;
    ${tw`text-secondary`};
    ${tw`text-body-sm`}
    background-color: transparent;
    ${tw`px-4`};
    ${tw`transition-colors`};
    ${tw`duration-base`};
    ${tw`outline-none`};
    ${tw`border-2`};
    ${tw`border-neutral-silver`};
    ${tw`rounded-lg`};

    padding-top: 1rem;
    padding-bottom: 1rem;

    ${size === 'medium' && tw`text-body-md pt-2 pb-2`}

    ${!borders && tw`border-neutral-ash sm:border-transparent`}

    &::placeholder {
      ${tw`text-neutral-stone`};
      ${tw`transition-opacity`};
      ${tw`duration-base`};
    }

    &:disabled {
      opacity: 0.5;
      &:hover {
        ${tw`cursor-not-allowed`};
      }
    }

    &:focus {
      ${borders ? tw`border-secondary` : tw`border-neutral-ash`};
    }

    &:focus::placeholder {
      opacity: 1;
    }

    &.error {
      ${tw`border-system-error`}
    }

    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .icon {
    position: absolute;
    ${tw`top-1/2`}
    ${tw`right-4`}
    transform: translateY(-50%);
  }

  .helper {
    position: absolute;
    top: 100%;
    left: 0;
    ${tw`mt-2`}
  }
`

export default styles
