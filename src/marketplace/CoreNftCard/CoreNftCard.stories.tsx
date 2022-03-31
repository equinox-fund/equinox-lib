import { Meta, Story } from '@storybook/react'
import CoreNftCard, { CoreNftCardProps } from './CoreNftCard'

export default {
  title: 'marketplace/CoreNftCard',
  component: CoreNftCard
} as Meta

const Template: Story<CoreNftCardProps> = (args) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 px-12 py-12">
    <CoreNftCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Vernal',
  image: '/nft/vernal.jpg',
  price: 1.99,
  usdPrice: 884.4,
  loading: false
}

export const Loading = Template.bind({})
Loading.args = {
  name: 'Autumnal',
  image: '/nft/autumnal.jpg',
  price: 0.5,
  usdPrice: 678,
  loading: true
}

