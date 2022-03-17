import tw, { css } from 'twin.macro'

const styles = css`
  ${tw`text-body-md`}

  h1,
  h2,
  h3,
  h4,
  p,
  img,
  video {
    ${tw`mb-6`}
  }

  h1 {
    ${tw`text-heading-xl`}
  }

  h2 {
    ${tw`text-heading-lg`}
  }

  h3 {
    ${tw`text-heading-md`}
  }

  h4 {
    ${tw`text-heading-sm`}
  }

  strong {
    ${tw`font-semibold`}
  }

  img,
  video {
    ${tw`mx-auto`}
    display: block;
  }

  a {
    text-decoration: underline;
    ${tw`font-medium`}
    transition: color;

    &:hover {
      ${tw`text-neutral-silver`}
    }
  }

  ul,
  ol {
    ${tw`mb-10`}
  }

  li {
    ${tw`mb-2`};
  }

  ul li {
    position: relative;
    ${tw`pl-12`}

    &:before {
      content: '—';
      display: block;
      position: absolute;
      ${tw`left-6`}
      top: 0;
    }
  }
`

export default styles
