import { Meta, Story } from '@storybook/react'
import MarketplaceNftCard, { MarketplaceNftCardProps } from './MarketplaceNftCard'

export default {
  title: 'marketplace/MarketplaceNftCard',
  component: MarketplaceNftCard
} as Meta

const Template: Story<MarketplaceNftCardProps> = (args) => (
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 px-12 py-12">
    <MarketplaceNftCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Autumnal',
  image: '/nft/autumnal.jpg',
  price: 0.5,
  lowestPrice: 678,
  available: 5,
  loading: false
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  name: 'Summer',
  description: 'Equinox Summer NFT',
  image: '/nft/summer.jpg',
  price: 38,
  lowestPrice: 16835.78,
  available: 5,
  loading: false
}

export const Loading = Template.bind({})
Loading.args = {
  name: 'Autumnal',
  image: '/nft/autumnal.jpg',
  price: 0.5,
  lowestPrice: 678,
  available: 5,
  loading: true
}
