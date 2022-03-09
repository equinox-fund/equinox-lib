import tw, { css } from 'twin.macro'

const styles = ({ open }) => css`
  &:focus {
    outline: 0;
  }

  .btn {
    ${tw`w-12`}
    ${tw`h-12`}
    display: flex;
    justify-content: center;
    align-items: center;
    ${tw`text-secondary`}
    ${tw`transition-colors`}
    ${tw`duration-base`}
    ${tw`border-transparent`}
    position: relative;
    overflow: hidden;
  }

  .burger-wrap {
    width: 1.25rem;
  }

  .burger-top,
  .burger-center,
  .burger-bottom {
    display: flex;
    justify-content: space-between;
    position: absolute;
    ${tw`bg-current`}
    ${tw`w-7`}
    height: 2px;
  }

  .burger-top {
    ${tw`transition-transform`}
    ${tw`duration-base`}
    transform: ${open ? 'rotate(45deg);' : 'translateY(-0.5625rem);'};
  }

  .burger-center {
    ${tw`transition-opacity`}
    ${tw`duration-base`}
    opacity: ${open ? 0 : 1};
  }

  .burger-bottom {
    ${tw`transition-transform`}
    ${tw`duration-base`}
    transform: ${open ? 'rotate(-45deg);' : 'translateY(0.5625rem);'};
  }
`

export default styles
