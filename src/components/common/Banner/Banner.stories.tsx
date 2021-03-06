import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from './Banner'
import Button from '../Button'

export default {
  title: 'components/common/Banner',
  component: Banner
} as Meta

const Template: Story<BannerProps> = (args) => (
  <div className="w-full pt-8 pb-24">
    <Banner {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  text: 'Please connect your wallet.',
  cta: <Button color="secondary">Connect wallet</Button>
}

export const Muted = Template.bind({})
Muted.args = {
  text: 'Please connect your wallet.',
  cta: <Button color="secondary">Connect wallet</Button>,
  color: 'muted'
}

export const LeftAligned = Template.bind({})
LeftAligned.args = {
  text: 'Please connect your wallet.',
  cta: <Button color="secondary">Connect wallet</Button>,
  align: 'left'
}
