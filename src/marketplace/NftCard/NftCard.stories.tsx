import { Meta, Story } from '@storybook/react'
import NftCard, { NftCardProps } from './NftCard'

export default {
  title: 'marketplace/NftCard',
  component: NftCard
} as Meta

const Template: Story<NftCardProps> = (args) => (
  <div className="grid grid-cols-3 gap-x-8 px-12 py-12">
    <NftCard {...args} />
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
