import tw, { css, theme } from 'twin.macro'

const styles = ({ padding, size }) => css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  ${tw`z-modal`}
  overflow-y: scroll;
  padding: 2rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);

  &:focus {
    outline: 0;
  }

  .modal-inner {
    position: relative;
    padding: ${padding ? '2rem 2.75rem 1.5rem' : '0'};
    width: 100%;
    margin: 0 auto;
    ${tw`text-secondary`}
    ${tw`rounded-lg`}
    ${tw`border-2`}
    ${tw`border-neutral-charcoal`}
    ${tw`bg-neutral-dark`}

    ${size === 'medium' && tw`max-w-modal-md`}
    ${size === 'large' && tw`max-w-modal-lg`}
    ${size === 'small' && tw`max-w-modal-xs`}

    @media (max-width: calc(${theme`screens.md`} - 1px)) {
      padding: ${padding ? '3.5rem 1.2rem 2.5rem' : '0'};
    }
  }

  .title-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .footer-row {
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    ${tw`space-x-2 justify-center`}
  }

  .close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;

    &:focus {
      outline: 0;
    }
  }

  .close-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const backdropStyles = css`
  position: fixed;
  top: 0;
  bottom: -10rem;
  left: 0;
  right: 0;
`

export { backdropStyles }
export default styles
