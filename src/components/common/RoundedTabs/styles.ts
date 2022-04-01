import tw, { css } from 'twin.macro'

const styles = css`
  .tabs {
    ${tw`flex`}
    ${tw`justify-between`}
    ${tw`sm:justify-start`}
    
    .tab-btn {
      ${tw`px-4`}
      ${tw`py-2`}
      ${tw`text-body-lg`}
      ${tw`xxs:px-6`}
      ${tw`lg:px-8`}

      &.active {
        ${tw`rounded-full`}
        ${tw`bg-neutral-ash`}
      }
    }
  }
`

/**
 * 
    .tabs-inner {
      ${tw`p-1`}
      ${tw`rounded-full`}
      ${tw`xs:inline-block`}
    }

    .tabs-switch {
      display: flex;
      justify-content: space-between;
      position: relative;

      ${tw`duration-base`}

      .indicator {
        ${tw`mt-0.5`}
      }
    }
  }

  .tab-btn {
    ${tw`px-4`}
    ${tw`py-1`} 
    position: relative;
    display: flex;
    width: 50%;
    ${tw`items-center`}
    ${tw`justify-center`}
    ${tw`text-body-lg`}

    &:active {
      ${tw`rounded-full`}
      ${tw`bg-neutral-ash`}
    }
  }

  .tab-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    ${tw`transition-opacity`}
    ${tw`duration-base`}
  }
 */

export default styles
