import tw, { css } from 'twin.macro'

const styles = css`
  ${tw`md:grid`}
  ${tw`md:grid-cols-2`}
  ${tw`md:gap-x-8`}

  .nft-image-wrapper {
    width: 100%;
    height: 0;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
    ${tw`mb-8`}
  }

  .nft-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      display: block;
      object-fit: cover;
      object-position: center;
      ${tw`rounded-md`}
      ${tw`border`}
      ${tw`border-neutral-stone`}
      width: 100%;
    }
  }

  .nft-details {
    ${tw`mt-4`}
    ${tw`xl:pl-16`}
  }

  .nft-tabs {
    ${tw`rounded-full`}
    ${tw`border`}
    ${tw`border-neutral-ash`}
    ${tw`p-1`}
  }

  .nft-tab-content {
    ${tw`py-8`}
  }

  .nft-tab-content-row {
    ${tw`grid`}
    ${tw`grid-cols-2`}
    ${tw`gap-x-6`}
    ${tw`justify-start`}
    ${tw`mb-2`}
    ${tw`md:gap-x-16`}
  }
`

export default styles
