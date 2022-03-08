import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from './Banner'
import Button from '../Button'

export default {
  title: 'components/Banner',
  component: Banner
} as Meta

const Template: Story<BannerProps> = (args) => (
  <div className="w-full pt-8 pb-24">
    <Banner
      {...args}
      text="Please connect your wallet."
      cta={<Button color="secondary">Connect wallet</Button>}
    />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
