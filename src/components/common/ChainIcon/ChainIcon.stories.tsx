import { Story, Meta } from '@storybook/react'
import ChainIcon, { ChainIconProps } from './ChainIcon'

export default {
  title: 'components/common/ChainIcon',
  component: ChainIcon
} as Meta

const Template: Story<ChainIconProps> = (args) => (
  <ChainIcon className="w-5" {...args} />
)

export const Binance = Template.bind({})
Binance.args = {
  chainId: 97,
  className: 'w-5'
}

export const Eth = Template.bind({})
Eth.args = {
  chainId: 1,
  className: 'w-5'
}
export const Unknown = Template.bind({})
Unknown.args = {
  chainId: 100,
  className: 'w-5 text-secondary'
}
