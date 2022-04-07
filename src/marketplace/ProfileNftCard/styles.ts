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

  .card-row {
    display: flex;
    ${tw`justify-between`}
    ${tw`items-center`}
  }

  .card-footer {
    display: flex;
    ${tw`justify-between`}
  }

  .card-cta {
    ${tw`mx-auto`}

    svg {
      transition: opacity 0.075 cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      svg {
        opacity: 0.6;
      }
    }
  }
`

export default styles
