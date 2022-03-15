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

  h1,
  h2,
  h3,
  h4 {
    ${tw`font-semibold`}
  }

  h1 {
    ${tw`text-heading-lg`}
  }

  h2 {
    ${tw`text-heading-md`}
  }

  h3 {
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
    transition: color;

    &:hover {
      ${tw`text-neutral-silver`}
    }
  }

  ul,
  ol {
    ${tw`mb-10`}
  }

  ol {
    counter-reset: steps-counter;
  }

  li {
    ${tw`mb-2`};
  }

  ul li,
  ol li {
    position: relative;
    ${tw`pl-12`}
  }

  ol li {
    counter-increment: steps-counter;

    &:before {
      content: counter(steps-counter, decimal) '.';
      display: block;
      position: absolute;
      ${tw`left-6`}
      top: 0;
    }
  }

  ul li {
    &:before {
      content: '—';
      display: block;
      position: absolute;
      ${tw`left-6`}
      top: 0;
    }
  }

  li p {
    ${tw`mb-2`}
  }
`

export default styles
