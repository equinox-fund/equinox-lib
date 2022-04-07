import tw, { css } from 'twin.macro'

const styles = css`
  cursor: pointer;

  .card-image-wrapper {
    width: 100%;
    height: 0;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
    ${tw`mb-8`}
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: center;
      ${tw`rounded-md`}
      ${tw`border`}
      ${tw`border-neutral-stone`}
    }
  }
`

export default styles
