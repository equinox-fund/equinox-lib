import { Story, Meta } from '@storybook/react'
import RichText from './RichText'

export default {
  title: 'components/common/RichText',
  component: RichText
} as Meta

const Template: Story = (args) => (
  <div className="p-12 flex text-secondary">
    <RichText {...args} />
  </div>
)

const bio = {
  json: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'Meet Peter, Founder and CEO of the Grow Group. Before founding Grow in 2021, he established himself as a thought leader in the crypto space with a large following under his pseudonym ‘Bankless.’ The forward-thinking vision he shared through editorial pieces soon caught the attention of various cutting-edge blockchain companies, with whom Peter ended up taking on different advisory roles as a natural progression.',
            nodeType: 'text'
          }
        ],
        nodeType: 'paragraph'
      },
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "Scotty Beam is the ",
            marks: [],
            data: {}
          },
          {
            nodeType: "hyperlink",
            content: [
              {
                nodeType: "text",
                value: "world's first cross-chain NFT teleport",
                marks: [],
                data: {}
              }
            ],
            data: {
              "uri": "https://google.com"
            }
          },
          {
            nodeType: "text",
            value: ", validator and peer-to-peer exchange. Scotty works with all EVM-compatible blockchains, filling the gaps in the NFT industry and empowering projects with cutting-edge technologies.",
            marks: [],
            data: {}
          }
        ],
        data: {}
      },
      {
        nodeType: "embedded-asset-block",
        content: [],
        data: {
          target: {
            sys: {
              id: "36tUIH6mH278Cb4EfWtRyn",
              type: "Link",
              linkType: "Asset"
            }
          }
        }
      }
    ],
    nodeType: 'document'
  },
  links: {
    assets: {
      block: [
        {
          sys: {
            id: "36tUIH6mH278Cb4EfWtRyn"
          },
          url: "https://images.ctfassets.net/zt0e8o89ldm4/36tUIH6mH278Cb4EfWtRyn/0ecb05ba688d7c87bf145126f6ef3086/scotty-beam-banner-1.png",
          title: "scotty beam background"
        }
      ]
    }
  }
}


export const Default = Template.bind({})
Default.args = {
  json: bio.json,
  links: bio.links
}
