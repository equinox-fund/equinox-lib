import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './styles'

interface RichTextBlock {
  json?: Document
  links?: {
    assets: {
      block: any
    }
  }
}

// MARKS
const Bold = ({ children }) => <strong>{children}</strong>

// BLOCKS
const P = ({ children }) => <p>{children}</p>
const H1 = ({ children }) => <h1>{children}</h1>
const H2 = ({ children }) => <h2>{children}</h2>
const H3 = ({ children }) => <h3>{children}</h3>
const BlockQuote = ({ children }) => (
  <blockquote className="rich-text-blockquote">{children}</blockquote>
)

const Asset = ({ img }) => {
  return <img src={img?.url} alt={img?.title} />
}

const Hyperlink = ({ data, children }) => (
  <a href={data.uri} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

interface RichTextProps extends RichTextBlock {
  className?: string
}

const RichText: React.FC<RichTextProps> = ({ json, links, className }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <P>{children}</P>,
      [BLOCKS.HEADING_1]: (_node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (_node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (_node, children) => <H3>{children}</H3>,
      [BLOCKS.QUOTE]: (_node, children) => <BlockQuote>{children}</BlockQuote>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const img = links.assets.block.find(
          (i) => i.sys.id === node.data.target.sys.id
        )
        return <Asset img={img} />
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <Hyperlink {...node}>{children}</Hyperlink>
      )
    },
    renderText: (text) =>
      text
        .split('\n')
        .reduce(
          (children, textSegment, index) => [
            ...children,
            index > 0 && <br key={index} />,
            textSegment
          ],
          []
        )
  }

  return (
    <div css={styles} className={className}>
      {documentToReactComponents(json, options)}
    </div>
  )
}

export default RichText
