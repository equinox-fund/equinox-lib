import tw, { css } from 'twin.macro'

// @ts-ignore
const styles = ({ size, align = 'center' }) => css`
  .form-checkbox {
    display: flex;
    cursor: pointer;
    ${size === 'small' ? '--input-width: 1.3rem;' : '--input-width: 1.5rem;'}
    ${align === 'center' ? tw`items-center` : tw`items-start`}
    ${tw`select-none`};

    &-control {
      position: relative;
    }

    &-input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: var(--input-width);
      height: var(--input-width);
      grid-area: checkbox;
      cursor: pointer;

      &:checked + .form-checkbox-pseudo-input {
        .form-checkbox-checkmark {
          opacity: 1;
          transform: scale(1);
        }
      }

      &:disabled + .form-checkbox-pseudo-input {
        opacity: 0.5;
      }
    }

    &-pseudo-input {
      display: block;
      grid-area: checkbox;
      width: var(--input-width);
      height: var(--input-width);
      ${tw`rounded-lg`};
      background: transparent;
      ${tw`transition-colors`};
      ${tw`duration-base`};
      overflow: hidden;
      ${tw`p-0.5`}
      ${tw`text-secondary`}

      .form-checkbox-checkmark {
        opacity: 0;
        transform: scale(0);
        transform-origin: bottom left;
        transition: opacity, transform;
        ${tw`duration-base`};
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &-label {
      ${tw`ml-2`};
    }
  }

  .form-checkbox {
    &-pseudo-input {
      ${tw`border`};
      ${tw`border-neutral-silver`};
    }
  }
`

export default styles
