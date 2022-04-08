import { Meta, Story } from '@storybook/react'
import ProfileNftCard, { ProfileNftCardProps } from './ProfileNftCard'

export default {
  title: 'marketplace/ProfileNftCard',
  component: ProfileNftCard
} as Meta

const Template: Story<ProfileNftCardProps> = (args) => (
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 px-12 py-12">
    <ProfileNftCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Autumnal',
  imageEl: <img src="/nft/autumnal.jpg" />,
  amount: 5,
  sale: 1,
  showCancel: false,
  showControls: false,
  loading: false
}

export const Cancel = Template.bind({})
Cancel.args = {
  name: 'Autumnal',
  imageEl: <img src="/nft/autumnal.jpg" />,
  amount: 5,
  sale: 1,
  showCancel: true,
  showControls: false,
  loading: false
}

export const Controls = Template.bind({})
Controls.args = {
  name: 'Autumnal',
  imageEl: <img src="/nft/autumnal.jpg" />,
  amount: 5,
  sale: 1,
  showCancel: false,
  showControls: true,
  hideTransfer: true,
  loading: false
}

export const Transfer = Template.bind({})
Transfer.args = {
  name: 'Autumnal',
  imageEl: <img src="/nft/autumnal.jpg" />,
  amount: 5,
  sale: 1,
  showCancel: false,
  showControls: true,
  loading: false
}

export const Settings = Template.bind({})
Settings.args = {
  name: 'Autumnal',
  imageEl: <img src="/nft/autumnal.jpg" />,
  amount: 5,
  sale: 1,
  showCancel: false,
  showControls: false,
  showSettings: true,
  loading: false
}

export const Loading = Template.bind({})
Loading.args = {
  name: 'Autumnal',
  imageEl: <img src="/nft/autumnal.jpg" />,
  amount: 5,
  sale: 1,
  showCancel: true,
  showControls: false,
  showSettings: true,
  loading: true
}
