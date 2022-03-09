import tw, { css } from 'twin.macro'

// @ts-ignore
const styles = ({ loading, showPreloader }) => css`
  position: relative;
  height: 100%;

  ${showPreloader &&
  css`
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: ${loading ? 1 : 0};
      background-color: #0d0d0d;
      pointer-events: ${loading ? 'auto' : 'none'};
      ${tw`transition-opacity`}
      ${tw`duration-slow`}
      ${tw`delay-base`}
      animation: pulse-bg 1s alternate ease infinite;
    }
  `}

  img {
    opacity: ${loading ? 0 : 1};
    ${tw`transition-opacity`}
    ${tw`duration-slow`}
    ${tw`delay-base`}
  }

  @keyframes pulse-bg {
    0% {
      background-color: #0d0d0d;
    }
    100% {
      background-color: #121212;
    }
  }
`

export default styles
